<template>
  <div>{{ user.name }}</div>
  <div>{{ user.age }}</div>
  <p v-html="123" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const a = 1

interface IUser {
  name: string
  age: number
}

const user = ref<IUser>({
  name: '张三',
  age: 0
})

</script>

<style scoped>

</style>
