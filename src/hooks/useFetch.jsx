import useRequest from '../dal/request.ts';
import { useQuery } from '@tanstack/react-query';

const useFetch = (url) => {
    const { get } = useRequest();
    const loadData = async () => await get(url);
    const { status, data, refetch, isPaused } = useQuery({
        queryKey: [url],
        queryFn: loadData,
        retry: false
    });

    const responseData = data || [];
    const responseStatus = status == 'pending' ? 'loading' : status;


    return [responseStatus, responseData, refetch, isPaused];
};

export default useFetch;