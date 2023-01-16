import { defineStore} from 'pinia'

export const useUserStore = defineStore('user',{
  state:() => {
      return {
        token: '123',
      }
  },
  getters:{

  },
  persist: {
    enabled: true , // 这个配置代表存储生效，而且是整个store都存储
  },
  actions:{
    setToken(token: string) {
      this.token = token
    },
    clearToken() {
      this.token = ''
    }
  }
})