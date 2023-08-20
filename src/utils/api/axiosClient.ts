import axios, { AxiosInstance } from 'axios';

class AxiosClient {
  client: AxiosInstance;

  constructor() {
    this.client = this.getClient();
  }

  getClient() {
    if (!this.client) {
      this.client = axios.create({
        baseURL: process.env.REACT_APP_API_ADDRESS,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return this.client;
  }
}

export default new AxiosClient();
