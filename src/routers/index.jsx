import { BrowserRouter } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import PublicRoutes from "./PublicRoutes.jsx";
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import AdminRoutes from "./AdminRoutes.jsx";

import { useState } from "react";
// import Blk from '../assets/img/fairtile-blk.png';
import useAppContext from "../hooks/useAppContext.jsx";
// import { FormattedMessage } from "react-intl";

const ApplicationRoutes = () => {
    const [isSessionChecking, setIsSessionChecking] = useState(true);
    const [auth, setAuth] = useAuth();
    const [, setConext] = useAppContext();


    // This function is used to validate your session
    // const validateSession = async () => {
    //     const code = ApplicationStorage.getItem('code');
    //     const url = import.meta.env.ESG_API_URL + 'profile';
    //     const options = {
    //         headers: {
    //             authcode: code,
    //             'Content-Type': 'application/json',
    //             'redirect-uri': import.meta.env.ESG_REDIRECT_URI
    //         }
    //     };

    //     if (code) {
    //         try {
    //             const res = await axios.get(url, options);
    //             await savePreferences();
    //             setAuth({
    //                 isAuthenticated: true,
    //                 user: res.data
    //             });
    //         } catch (error) {
    //             console.log("Session expired !!!");
    //         }
    //         setIsSessionChecking(false);
    //     }
    //     else
    //         setIsSessionChecking(false);

    // };

    // useEffect(() => {
    //     validateSession();
    // }, []);

    // let routes = PublicRoutes;
    // const isAdmin = auth?.user?.isAdmin;

    // if (auth.isAuthenticated) {
    //     if (isAdmin)
    //         routes = AdminRoutes;
    //     else
    //         routes = ProtectedRoutes;
    // }

    // if (isSessionChecking) return <Loading />;

    return (
        <BrowserRouter>
            {PublicRoutes}
        </BrowserRouter>
    );
}


export default ApplicationRoutes;