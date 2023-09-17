import axios, {CreateAxiosDefaults} from "axios";

const configs: CreateAxiosDefaults = {
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
  }
}
const requester = axios.create(configs);

export default requester;