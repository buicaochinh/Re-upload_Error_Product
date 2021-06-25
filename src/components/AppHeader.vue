<template>
  <h1 class="title is-3">{{ appName }}</h1>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { APP_NAME } from '../cores/settings'

export default defineComponent({
  name: 'AppHeader',
  setup() {
    return {
      appName: APP_NAME,
    }
  },
})
</script>
