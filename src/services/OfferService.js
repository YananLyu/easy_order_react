import axios from 'axios';

const OFFER_API_PUBLISH_URL = "http://localhost:8080/api/admin/offers";
const OFFER_API_BASE_URL = "http://localhost:8080/api/offers/";

class OfferService {

    /**
     * POST
     * publish a new offer
     *
     * @param offer
     * @returns {Promise<AxiosResponse<any>>}
     */
    publishOffer(offer) {
        return axios.post(OFFER_API_PUBLISH_URL, offer);
    }

    /**
     * GET
     * get active offers
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    getActiveOffers() {
        return axios.get(OFFER_API_BASE_URL + '/active');
    }

    /**
     * POST
     * FIXME：fix the axios.post()
     * Propose an expired offer, to ask admin to
     * @param proposedOffer
     * @returns {Promise<AxiosResponse<any>>}
     */
    getExpiredOffers(proposedOffer) {
        return axios.post(OFFER_API_PUBLISH_URL, proposedOffer);
    }


    proposeExpiredOffer(offer) {
        return axios.get(OFFER_API_BASE_URL + '/expired');
    }

    /**
     * GET
     * get offer by ID
     *
     * @param offerId
     * @returns {Promise<AxiosResponse<any>>}
     */
    getOfferById(offerId) {
        return axios.get(OFFER_API_BASE_URL + '/' + offerId);
    }


}

export default new OfferService();