import axios from 'axios';

const HOME_API_BASE_URL = "http://localhost:8080/api/home";

class HomeService {

    getHomeInfo() {
        return axios.get(HOME_API_BASE_URL);
    }
}

export default new HomeService();