/* eslint-disable @typescript-eslint/no-useless-constructor */

import useBaseService from "./BaseService.js";

const useBankingService = () => {
    const { create, read, update, remove } = useBaseService('');
    return { create, read, update, remove };
}

export default useBankingService;