import Axios from 'axios';
import Config from 'react-native-config';

const axiosInstance = Axios.create({
  baseURL: Config.BASE_URL,
});

export default axiosInstance;
