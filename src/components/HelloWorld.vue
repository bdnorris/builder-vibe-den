<script setup lang="ts">
interface Props {
  msg: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="p-4 rounded-lg bg-white/5 text-white border border-white/10">
    <h1 class="text-xl font-semibold">{{ props.msg }}</h1>
  </div>
</template>
