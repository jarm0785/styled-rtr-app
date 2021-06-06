import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const httpClient = {
  get<T extends unknown>(url: string, params?: string | number): Promise<AxiosResponse<T>> {
    return axiosInstance.get(url, { params })
      .catch((error) => this.handleError(error, 'get', url));
  },
  handleError(error: AxiosError): Promise<AxiosResponse> {

    throw error;
  },
};



export default httpClient;
