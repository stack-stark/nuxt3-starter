import { baseUrl } from '@/config/base'
import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue'
import { useUserStore } from '@/store/user'
import { ResponseCode } from '@/common/responseCode'
import qs from 'qs'

export const http = axios.create({
  baseURL: baseUrl,
});

http.interceptors.request.use((config: any) => {
  if (config.headers) {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    const lang = localStorage.getItem('locale') || 'zh_CN'
    config.headers.language = lang === 'zh_CN' ? 'zh_cn' : 'zh_tw'
  }
  return config
})

http.interceptors.response.use(
  (response) => {
    if (response.data instanceof Blob) {
      return response
    }
    if (response && response.status === ResponseCode.NORMAL) {
      if (response.data.code === ResponseCode.NO_LOGIN || response.data.code === ResponseCode.NO_PERMISSION) {
        const userStore = useUserStore();
        userStore.clearToken();
        setTimeout(() => {
          window.location.href = '/login'
        }, 500)
      }
      if (
        response.data.code !== ResponseCode.SUCCESS &&
        response.data.code !== ResponseCode.NORMAL
      ) {
      //  message.error(response.data.errMsg)
      }
      return response.data
    } else {
      // message.error(response.data.errMsg)
      return Promise.reject(response)
    }
  },
  (error) => {
    console.error(error)
    if (error.response.data.code === ResponseCode.NO_LOGIN || error.response.data.code === ResponseCode.NO_PERMISSION) {
      const userStore = useUserStore();
      userStore.clearToken();
      setTimeout(() => {
        window.location.href = '/login'
      }, 500)
    }else{
      const tips = error.response?.data ? `${error.response?.data?.errMsg}` : '网络错误，请检查！'
      message.error(tips)
    }
  }
)
