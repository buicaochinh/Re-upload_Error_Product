<template>
  <thead>
    <tr>
      <th v-for="field in fields" :key="field.id">{{ field.name }}</th>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

// Tabke fields
import { TABLE_FIELDS } from "../cores/settings";

export default defineComponent({
  name: "TableHeader",
  setup() {
    return {
      fields: TABLE_FIELDS,
    };
  },
});
</script>
