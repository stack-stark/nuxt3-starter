import { defineStore} from 'pinia'

export const useLocaleStore = defineStore('locale',{
  state:() => {
      return {
        locale: localStorage.getItem('locale') || 'zh_CN',
      }
  },
  getters:{
    
  },
  persist: {
    enabled: true , // 这个配置代表存储生效，而且是整个store都存储
  },
  actions:{
    setLocaleCode(localeCode: string) {
      this.locale = localeCode
    },
  }
})