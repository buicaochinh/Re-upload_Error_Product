<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      v-if="current !== 1"
      class="pagination-previous"
      @click="changePage(current - 1)"
      >Previous</a
    >
    <a v-else class="pagination-previous" disabled>Previous</a>
    <a
      v-if="current !== totalPage"
      class="pagination-next"
      @click="changePage(current + 1)"
      >Next</a
    >
    <a v-else class="pagination-next" disabled>Next</a>
    <ul class="pagination-list">
      <li v-for="page in range(current)" :key="page">
        <a
          :class="{ 'pagination-link': true, 'is-current': page === current }"
          :aria-label="`Page ${page}`"
          aria-current="page"
          @click="changePage(page)"
          >{{ page }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'Paginator',
  props: {
    current: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      required: true,
    },
  },
  emits: ['changePagePagination'],
  setup(props, context) {
    const range = (currentPage: number) => {
      if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
        if (props.totalPage < 5) return props.totalPage
        return 5
      } else if (
        currentPage === props.totalPage ||
        currentPage === props.totalPage - 1 ||
        currentPage === props.totalPage - 2
      ) {
        if (props.totalPage < 5) return props.totalPage
        return [
          props.totalPage - 4,
          props.totalPage - 3,
          props.totalPage - 2,
          props.totalPage - 1,
          props.totalPage,
        ]
      } else {
        return [
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        ]
      }
    }

    const changePage = (page: number): void => {
      if (page > props.totalPage) page = props.totalPage
      else if (page < 1) page = 1
      context.emit('changePagePagination', page)
    }

    return {
      range,
      changePage,
    }
  },
})
</script>
