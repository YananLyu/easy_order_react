import axios from 'axios';

const OFFER_API_PUBLISH_URL = "http://localhost:8080/api/admin/offers/publish";
const OFFER_API_BASE_URL = "http://localhost:8080/api/offers/";

class OfferService {

    /**
     * publish a new offer
     *
     * @param offer
     * @returns {Promise<AxiosResponse<any>>}
     */
    publishOffer(offer) {
        return axios.get(OFFER_API_PUBLISH_URL, offer);
    }

    getAllItems() {
        return axios.get(OFFER_API_BASE_URL);
    }

    getActiveItems() {
        return axios.get(OFFER_API_BASE_URL + '/active');
    }

    getExpiredItems() {
        return axios.get(OFFER_API_BASE_URL + '/expired');
    }

    getItemById(itmeId) {
        return axios.get(OFFER_API_BASE_URL + '/' + itmeId);
    }


}

export default new OfferService();