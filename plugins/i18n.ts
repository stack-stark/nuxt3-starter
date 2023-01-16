import { createI18n } from 'vue-i18n'; // 引入vue-i18n组件
import zh_CN from '../i18n/zh_CN'; // 引入vue-i18n组件
import zh_HK from '../i18n/zh_HK'; // 引入vue-i18n组件
import en_US from '../i18n/en_US'; // 引入vue-i18n组件

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: localStorage.getItem('locale') || 'zh_CN',
  messages: {
    'zh_CN': zh_CN,
    'zh_HK': zh_HK,
    'en_US': en_US
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(i18n)
});