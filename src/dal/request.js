import axios from 'axios';
import ApplicationStorage from '../utils/ApplicationStorage.ts';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.jsx';
import { cloneDeep } from 'lodash';
import useTheme from '../hooks/useTheme.jsx';
import MyAlert from '../utils/MyAlert.ts';

const RETRY_COUNT = 5;
const API_STATUS = {
    RETRIABLE: [429],
    EXIT: [500, 504, 502],
    BLANK: [404],
    OFFLINE: ["ERR_NETWORK"],
    EXPIRED: [403, 401]
};


const useRequest = () => {
    const navigate = useNavigate();
    const [, setAuth] = useAuth();
    const [context] = useTheme();

    const get = async (url) => {
        const config = {
            url,
            method: 'get'
        };
        return await request(config);
    };

    const post = async (url, data) => {
        const config = {
            url,
            data,
            method: 'post'
        };
        return await request(config);
    }

    const put = async (url, data) => {
        const config = {
            url,
            data,
            method: 'put'
        };
        return await request(config);
    }

    const del = async (url) => {
        const config = {
            url,
            method: 'delete'
        };
        return await request(config);
    }

    const request = async (config) => {
        for (let index = 0; index < RETRY_COUNT; index++) {

            try {

                let url = import.meta.env.ESG_API_URL + config.url;

                if (url.includes('?'))
                    url += `&langCode=${context.lang || 'en'}`;
                else
                    url += `?langCode=${context.lang || 'en'}`;

                config.url = url;

                config['headers'] = {
                    authcode: ApplicationStorage.getItem('code'),
                    'Content-Type': 'application/json',
                    'redirect-uri': import.meta.env.ESG_REDIRECT_URI
                };
                const tConfig = cloneDeep(config);
                tConfig.timeout = 20000;

                const res = await axios(tConfig);
                return res.data || 'success';

            }
            catch (ex) {
                const res = handleCatch(ex);
                if (res === 'break' || res === 'blank') return null;
                else if (index === RETRY_COUNT - 1) throw ex;
            }
        }
    }

    const handleCatch = (ex) => {

        ex.code = ex?.response?.status || ex.code;

        if (API_STATUS.RETRIABLE.includes(ex.code)) {
            return '';
        }
        else if (API_STATUS.EXIT.includes(ex.code)) {
            MyAlert.alert({
                icon: 'error',
                description: 'Something went wrong please try after sometime.'
            });
            return 'break';
        }
        else if (API_STATUS.EXPIRED.includes(ex.code)) {
            setAuth({
                isAuthenticated: false,
                user: null
            });
            ApplicationStorage.removeAll();
            
            MyAlert.alert({
                icon: 'error',
                description: 'Oops, your session has been expired!'
            });
            navigate('/');
            return 'break';
        }
        else if (API_STATUS.BLANK.includes(ex.code)) {
            return 'blank';
        }
        else if (API_STATUS.OFFLINE.includes(ex.code)) {
            MyAlert.alert({
                icon: 'error',
                description: 'Something went wrong with your internet connection.'
            });
            return 'break';
        }
        else
            throw ex;
    };

    return { get, put, post, del };
}


export default useRequest;

