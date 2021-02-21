import axios from 'axios';

const ITEM_API_BASE_URL = "http://localhost:8080/api/inbound";

class InboundService {

    getAllItems() {
        return axios.get(ITEM_API_BASE_URL);
    }

    getActiveItems() {
        return axios.get(ITEM_API_BASE_URL + '/confirm');
    }

    getExpiredItems() {
        return axios.get(ITEM_API_BASE_URL + '/history');
    }

    getItemById(itmeId) {
        return axios.get(ITEM_API_BASE_URL + '/' + itmeId);
    }


}

export default new ItemService();