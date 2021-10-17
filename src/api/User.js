import axios from "axios";
import {API_BASE_URL} from '../Constants'

class User {

    register = (data) => {
        let url = API_BASE_URL + '/api/v1/registration'
        return axios.post(url, data)
    }
}

export default new User();