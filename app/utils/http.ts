/* eslint-disable no-console */
import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  timeout: 1000 * 30,
  headers: {
    'Content-Type': 'application/json',
  },
})
const isDev = import.meta.env.DEV

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    console.error('request-error', error)
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (isDev)
      console.log(`${response.config.url}`, response)
    return response.data
  },
  (error: AxiosError) => {
    console.error('response-error', error)
    return Promise.reject(error)
  },
)

export function get<RES = any, REQ = object>(path: string, data?: REQ): Promise<RES> {
  return axiosInstance(path, {
    method: 'get',
    params: data,
  })
}
export function post<RES extends string | object>(path: string, data?: Record<string, any>): Promise<RES> {
  return axiosInstance(path, {
    method: 'post',
    data,
  })
}
