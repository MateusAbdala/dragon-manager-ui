import axios, { AxiosRequestConfig } from 'axios';

const DEFAULT_OPTIONS: AxiosRequestConfig = {
  baseURL: 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1',
};

const axiosInstance = axios.create(DEFAULT_OPTIONS);

export { axiosInstance as API };
