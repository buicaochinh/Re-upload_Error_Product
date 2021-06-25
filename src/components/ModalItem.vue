<template>
  <div class="card card--flex">
    <div class="card-image">
      <img :src="image || errorImage" width="200" :alt="name" />
    </div>
    <div class="card-content">
      <h5 class="title is-5">{{ name }}</h5>
      <div class="id-info">ID: {{ id }}</div>
      <div class="sku-info">
        SKU:
        <span class="sku-value">{{ sku }}</span>
      </div>
      <div class="color-info">
        Color:
        <div class="box-color" :style="`background-color: ${color.toLowerCase()}`"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ERROR_IMAGE } from '../cores/errors'

export default defineComponent({
  name: 'ModalItem',
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    sku: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  setup() {
    return {
      errorImage: ERROR_IMAGE
    }
  }
})
</script>

<style scoped>
.card--flex {
  display: flex;
}

.sku-value {
  color: red;
}

.color-info {
  display: flex;
}

.box-color {
  margin: 0.3rem;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 2rem;
  height: 1rem;
}
</style>
