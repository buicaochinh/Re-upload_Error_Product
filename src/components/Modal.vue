<template>
  <div :class="{ modal: true, 'modal--block': toggleModal }">
    <div class="modal-background" @click="closeModal(false)"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalTitle }}</p>
      </header>
      <section class="modal-card-body">
        <ModalItem
          v-for="item in items"
          :id="item.id"
          :key="item.id"
          :name="item.name"
          :sku="item.sku"
          :color="item.color"
          :image="item.image"
        ></ModalItem>
        <div v-if="items.length === 0" class="empty-notification">{{ empty }}</div>
      </section>
      <footer class="modal-card-foot">
        <div class="separator"></div>
        <button class="button is-success" @click="closeModal(true)">OK</button>
        <button class="button is-danger" @click="closeModal(false)">Cancel</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/runtime-core'

import ModalItem from './ModalItem.vue'

import { MODAL_TITLE, EMPTY_NOTIFICATION } from '../cores/settings'
import { ProductList } from 'src/cores/types'

export default defineComponent({
  name: 'Modal',
  components: { ModalItem },
  props: {
    toggleModal: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array as PropType<ProductList>,
      required: true,
    },
  },
  emits: ['closeModal'],
  setup(props, context) {
    const closeModal = (isUpdated: boolean) => {
      context.emit('closeModal', isUpdated)
    }
    return {
      modalTitle: MODAL_TITLE,
      empty: EMPTY_NOTIFICATION,
      closeModal,
    }
  },
})
</script>

<style scoped>
.modal--block {
  display: block !important;
}

.modal--block .modal-card {
  margin-top: 4rem;
}

.empty-notification {
  text-align: center;
  line-height: 100px;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
