<template>
  <div>
    <a-result :status="error.statusCode" :title="t('pageErr')">
      <!-- <template #extra>
        <a-button type="primary" @click="handleError">{{t('pageErrBtn')}}</a-button>
      </template> -->
    </a-result>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object
});
const error = useError();
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const handleError = () => clearError({ redirect: '/' });
onMounted(() => {
  setTimeout(() => {
    handleError();
  }, 2600);
});
</script>

<style lang="less" scoped>
:deep(.ant-result-content){
  background: #fff;
}
</style>