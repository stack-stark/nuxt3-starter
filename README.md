# nuxt3新特性

## components下组件自动注册，使用时不再需要导入

components/some.vue
``` js
<template>
  <div>
    some
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
```

index.vue
``` html
<template>
  <div>
    <some />
  </div>
</template>
```

## plugins下插件自动注册，不再需要在nuxt.config.ts声明
antd.ts
``` ts
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Antd)
});
```

## 路由中间件

### 1.全局路由中间件，需要文件带.global即可全局自动使用
middleware/some.global.ts
``` ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
```

### 2.局部路由中间件，文件不能带.global，需要使用的页面声明使用
middleware/todo.ts
``` ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
```
pages/demo.vue

``` ts
<template>
  <div>
    局部路由中间件
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
});
</script>

<style scoped>

</style>
```

# pinia使用示例
## 1.store下新建对应文件。eg: user.ts
``` ts
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
```
## 2.使用
``` ts
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
userStore.token //取值

userStore.setToken('xxx') //赋值
```
## pinia中文文档
https://pinia.web3doc.top/introduction.html

# 环境变量声明和取值

## 声明
环境变量写在env文件夹下对应文件内
.env.dev
``` js
VITE_BUILD=DEV
VITE_BASEURL=https://dev-tp-api.xht-kyy.com
```
## 取值
``` ts
const runtimeConfig = useRuntimeConfig()
const envData = runtimeConfig.public.envData
// envData 包含env.dev声明的值
```
# http请求 

``` ts
import { http } from '@/utils/http';

http.post('/mall/brandAndProject', { institution: null }).then((res) => {
  console.log(res);
})
```

# 图标使用
复制 svg Symbol 

``` html
<svg class="iconpark-icon"><use href="#undo"></use></svg>
```

# 多语言
## 1.i18n/zh_CN.ts && i18n/zh_HK.ts文件中声明变量
``` ts
export default {
  home: "首页",
}
```

## 2.页面使用
``` ts
<template>
  <div>
    <p>{{t('home')}}</p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

definePageMeta({
  layout: "pc",
});
</script>

<style scoped>

</style>
```