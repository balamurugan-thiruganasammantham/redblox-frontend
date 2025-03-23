import axios from 'axios';
import { getAccessAuthToken } from 'utils/authToken';
import { auth } from 'utils/firebase';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers.Authorization ||= await getAccessAuthToken(true);
    config.headers.Accept ||= 'application/json';
    config.headers['Content-Type'] ||= 'application/json';

    return config;
  },
  (error) => Promise.reject(error),
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      await auth?.currentUser?.reload();
    }

    return Promise.reject(error);
  },
);

export default axiosApiInstance;
