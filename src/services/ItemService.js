import axios from 'axios';

const ITEM_API_BASE_URL = "http://localhost:8080/api/items";

class ItemService {

    getAllItems() {
        return axios.get(ITEM_API_BASE_URL);
    }

    getActiveItems() {
        return axios.get(ITEM_API_BASE_URL + '/active');
    }

    getExpiredItems() {
        return axios.get(ITEM_API_BASE_URL + '/expired');
    }

    getItemById(itmeId) {
        return axios.get(ITEM_API_BASE_URL + '/' + itmeId);
    }


}

export default new ItemService();