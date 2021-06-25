<template>
  <div class="card card--flex">
    <div class="card-image">
      <img :src="image" width="200" :alt="name" />
    </div>
    <div class="card-content">
      <h5 class="title is-5">{{ name }}</h5>
      <div>ID: {{ id }}</div>
      <div>
        SKU:
        <span class="sku-value">{{ sku }}</span>
      </div>
      <div>Color: {{ color }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "ModalItem",
  props: {
    name: String,
    id: Number,
    sku: String,
    color: Number,
    image: String,
  },
});
</script>

<style scoped>
.card--flex {
  display: flex;
}

.sku-value {
  color: red;
}
</style>
