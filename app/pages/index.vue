<script setup lang='ts'>
import { useRequest } from 'vue-hooks-plus'
import { post } from '~/utils/http'

useHead({
  title: '首页',
})
const { data } = useRequest(() => post('/api/hello'), {
  debugKey: 'hello',
})
const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('Backlog')
</script>

<template>
  <div class="wh-full flex-col-center gap-10">
    <span>Hello!</span>
    <span>{{ data }}</span>
    <UButton>Button</UButton>
    <USelectMenu v-model="value" :items="items" />
  </div>
</template>

<style scoped lang='less'>

</style>
