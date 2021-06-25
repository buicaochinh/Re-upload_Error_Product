<template>
  <div :class="{ modal: true, 'modal--block': toggleModal }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalTitle }}</p>
      </header>
      <section class="modal-card-body">
        <ModalItem
          v-for="item in items"
          :key="item.id"
          :name="item.name"
          :id="item.id"
          :sku="item.sku"
          :color="item.color"
          :image="item.image"
        ></ModalItem>
        <div v-if="items.length === 0">{{ empty }}</div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="closeModal">OK</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";

import ModalItem from "./ModalItem.vue";

import { MODAL_TITLE, EMPTY_NOTIFICATION } from "../cores/settings";

export default defineComponent({
  name: "Modal",
  components: { ModalItem },
  props: {
    toggleModal: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Object,
      default: () => { },
    },
  },
  setup(props, context) {
    const closeModal = () => {
      context.emit("closeModal");
    };
    return {
      modalTitle: MODAL_TITLE,
      empty: EMPTY_NOTIFICATION,
      closeModal,
    };
  },
});
</script>

<style scoped>
.modal--block {
  display: block !important;
}

.modal--block .modal-card {
  margin-top: 4rem;
}
</style>
