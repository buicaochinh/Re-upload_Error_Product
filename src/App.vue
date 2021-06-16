<template>
  <div class="container">
    <Table/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "./components/Table.vue"

export default defineComponent({
  name: "App",
  components: { Table }
})
</script>
