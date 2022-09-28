import axios, { AxiosRequestConfig } from 'axios'

const API_URL = `https://api.ussquash.com`

interface HttpRequestInit extends Omit<RequestInit, 'body'> {
  body?: object | string
}

export const httpClient = (
  resource: string,
  options: AxiosRequestConfig
): void => {
  // const { body, ...restOptions } = options
  // const finalOptions: RequestInit = { ...restOptions }
  // finalOptions.body = typeof body === 'object' ? JSON.stringify(body) : body
  // return axios({
  //   url: `${API_URL}${resource}`
  // })
}
