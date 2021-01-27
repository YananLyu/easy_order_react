import axios from 'axios';

const ITEM_API_BASE_URL = "http://localhost:8080/api/items";

class ItemService {

    getItems() {
        return axios.get(ITEM_API_BASE_URL);
    }

    getItemById(itmeId) {
        return axios.get(ITEM_API_BASE_URL + '/' + itmeId);
    }
}

export default new ItemService();