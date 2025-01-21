import useRequest from '../dal/request.js';

const useBaseService = (initialUrl) => {
    const { get, put, post, del } = useRequest();

    const create = async (url, data) => {
        return await post(url || initialUrl, data);
    }

    const read = async (url) => {
        return await get(url || initialUrl);
    }

    const update = async (url, data) => {
        return await put(url || initialUrl, data);
    }

    const remove = async (url) => {
        return await del(url || initialUrl);
    }

    return { create, read, update, remove };
};

export default useBaseService;

// type TURL = undefined | null | string;

// class BaseService {
//     serviceURL: string;

//     constructor(url: string) {
//         this.serviceURL = url;
//     }

//     async get(url?: TURL) {
//         return await get(url || this.serviceURL);
//     }


//     async post(url: TURL, data: any) {
//         return await post(url || this.serviceURL, data);
//     }

//     async put(url: TURL, data: any) {
//         return await put(url || this.serviceURL, data);
//     }

//     async delete(url: TURL) {
//         return await del(url || this.serviceURL);
//     }
// }

// export default BaseService;