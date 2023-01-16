import { loadEnv } from 'vite'

const envScript = process.env.npm_lifecycle_script ? process.env.npm_lifecycle_script.split(' ') : '';
const envName = envScript[envScript.length - 1]; // 通过启动命令区分环境
const envData = loadEnv(envName, 'env') as any;
// import legacy from '@vitejs/plugin-legacy';

export default defineNuxtConfig({
  ssr: false,
  modules: [
    // '@pinia/nuxt',
    // '@nuxtjs/i18n',
  ],
  app: {
    head: {
      charset: 'utf-8',
      title: 'title',
      meta: [
        {
          name: "google",
          content: "notranslate",
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'keywords' },
        { name: 'description', content: 'description' },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "logo_img_logo.png" }
      ],
      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  runtimeConfig: {
    baseURL: process.env.BASE_URL,
    public: {
      envData: envData
    }
  },
  css: [
    "assets/css/global.css"
  ],
  vite: {
    envDir: '~/env', // 指定env文件夹
  //   plugins: [
  //     legacy({
  //       targets: ['defaults', 'not IE 11'],
  //     }),
  //  ],
  },
})
