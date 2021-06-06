import { AxiosPromise } from 'axios';
import { API } from '../constants/api';
import { ISampleResponse } from '../interface/IApi';
import httpClient from './httpClient';

const sampleApi = {
  getSampleData: (): AxiosPromise<ISampleResponse> => {

    return httpClient.get(API.SAMPLE_API_URL);
  },
};

export default sampleApi;
