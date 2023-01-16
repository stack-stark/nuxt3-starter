<template>
  <div>
    <p>{{t('home')}}</p>
    <div>
      <a-button type="primary">Primary Button</a-button>
      <a-button>Default Button</a-button>
      <a-button type="dashed">Dashed Button</a-button>
      <a-button type="text">Text Button</a-button>
      <a-button type="link">Link Button</a-button>
    </div>
    <div>
      <a-dropdown>
        <a @click.prevent class="ant-dropdown-link">
          Hover me
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">1st menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">2nd menu item</a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">3rd menu item</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>

    <div>
      <a-pagination :current="2" :total="50" show-less-items />
    </div>

    <div>
      <a-card style="width: 300px" title="Default size card">
        <template #extra>
          <a href="#">more</a>
        </template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
      <br />
      <a-card size="small" style="width: 300px" title="Small size card">
        <template #extra>
          <a href="#">more</a>
        </template>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>
      </a-card>
    </div>

    <div style="padding: 20px;">
      <p>更改语言</p>
      <a-radio-group @change="change" v-model:value="nowLocale">
        <a-radio-button value="zh_CN">zh_CN</a-radio-button>
        <a-radio-button value="zh_HK">zh_HK</a-radio-button>
        <a-radio-button value="en_US">en_US</a-radio-button>
      </a-radio-group>
    </div>

    <some />
  </div>
</template>

<script setup lang="ts">
import { http } from '@/utils/http'
import { Ref } from 'nuxt/dist/app/compat/capi'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()

const nowLocale: Ref<string> = ref(localStorage.getItem('locale') || 'zh_CN')

const change = (e: Event) => {
  locale.value = nowLocale.value
  localStorage.setItem('locale', nowLocale.value)
}

onMounted(() => {
  console.log('onMounted')
  const runtimeConfig = useRuntimeConfig()
  console.log(runtimeConfig)
  http.post('/mall/brandAndProject', { institution: null }).then((res) => {
    console.log(res);
  })
})
</script>

<style scoped>
</style>
