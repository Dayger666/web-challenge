import { AxiosRequestHeaders } from 'axios';

export interface IResponse<T> {
  data: T;
  headers: AxiosRequestHeaders,
}
