<template>
  <div class="app__header">
    <app-header />
    <div class="separator"></div>
    <button class="button is-info" @click="onSubmit" :disabled="!onSubmitBtn">Submit</button>
  </div>
  <div class="app__body">
    <table class="table is-fullwidth is-bordered is-striped is-hoverable">
      <TableHeader />
      <tbody>
        <TableRow
          v-for="product in productsPage"
          :key="product.id"
          :colorList="colors"
          :id="product.id"
          :errorDescription="product.errorDescription"
          :productImage="product.image"
          :productName="product.name"
          :sku="product.sku"
          :color="product.color"
          @changeProductName="itemInfoChange('name',$event)"
          @changeSKU="itemInfoChange('sku',$event)"
          @changeColor="itemInfoChange('color', $event)"
        />
      </tbody>
    </table>
    <Paginator
      :current="currentPage"
      :totalPage="total"
      @changePagePagination="changePage($event)"
    />
    <teleport to="#app">
      <Loading v-if="loading" />
    </teleport>
    <teleport to="#app">
      <Modal :toggleModal="toggleModal" @closeModal="closeModal" :items="changedItems" />
    </teleport>
  </div>
</template>

<script lang="ts">
// Vue API
import { computed, defineComponent, onMounted } from "@vue/runtime-core";
import { Ref, ref, watch } from "vue";

// Component
import AppHeader from "./AppHeader.vue";
import TableHeader from "./TableHeader.vue";
import TableRow from "./TableRow.vue";
import Modal from "./Modal.vue";
import Paginator from "./Paginator.vue";
import Loading from "./Loading.vue";

// API and Types
import { fieldCanBeChanged } from "../cores/settings"
import { fetchProductList, fetchColorList } from "../hooks/fetchData";
import { ProductList, ColorList, Product } from "../cores/types";
import { productIsEqualToEachOther } from "../utils/compare";
import { pagination, totalPages } from "../utils/pagination";

const useTable = () => {
  // states
  const products: Ref<ProductList> = ref<ProductList>([]);
  const productsPage: Ref<ProductList> = ref<ProductList>([]);
  const productsClone: Ref<ProductList> = ref<ProductList>([]);
  const total: Ref<number> = ref<number>(0);

  const colors: Ref<ColorList> = ref<ColorList>([]);
  const toggleModal: Ref<boolean> = ref<boolean>(false);
  const loading: Ref<boolean> = ref<boolean>(false);
  const errorItems: Ref<number[]> = ref<number[]>([]);
  const changedItems: Ref<ProductList> = ref<ProductList>([]);

  const currentPage: Ref<number> = ref<number>(1);

  // computed
  const onSubmitBtn = computed<boolean>(() =>
    errorItems.value.length === 0 ? true : false
  );

  // watch
  watch(currentPage, (newVal: number, oldVal: number) => {
    productsPage.value = pagination(products.value, newVal);
  });

  // methods
  const itemInfoChange = (field: string, snapshot: any) => {
    if (snapshot.error !== undefined) {
      if (!errorItems.value.includes(snapshot.id)) {
        errorItems.value.push(snapshot.id);
      }
    } else {
      const idx: number = productsClone.value.findIndex(
        (element) => element.id === snapshot.id
      );
      const errorIdx: number = errorItems.value.findIndex(
        (element) => element === snapshot.id
      );
      errorItems.value.splice(errorIdx, 1);
      const changedItem: Product = {
        ...productsClone.value[idx]
      }
      changedItem[field] = snapshot[field]
      productsClone.value = [
        ...productsClone.value.slice(0, idx),
        changedItem,
        ...productsClone.value.slice(idx + 1),
      ];
    }
  }

  const onSubmit = (): void => {
    productsClone.value.forEach((item: Product, index: number) => {
      if (!productIsEqualToEachOther(item, products.value[index])) {
        changedItems.value.push(item);
      }
    });
    toggleModal.value = true;
  };
  const closeModal = (): void => {
    toggleModal.value = false;
    products.value = productsClone.value;
    changedItems.value = [];
  };

  const changePage = (page: number): void => {
    currentPage.value = page;
  };

  onMounted(async () => {
    loading.value = true;
    const { productList, fetchProductListData } = fetchProductList();
    const { colorList, fetchColorListData } = fetchColorList();
    await fetchProductListData();
    await fetchColorListData();
    products.value = productList.value;
    colors.value = colorList.value;
    productsClone.value = products.value;
    productsPage.value = pagination(products.value, 1);
    total.value = totalPages(products.value);
    loading.value = false;
  });

  return {
    loading,
    changedItems,
    toggleModal,
    onSubmitBtn,
    products,
    productsPage,
    currentPage,
    changePage,
    total,
    colors,
    itemInfoChange,
    onSubmit,
    closeModal,
  };
};

export default defineComponent({
  name: "Table",
  components: { AppHeader, TableHeader, TableRow, Modal, Paginator, Loading },
  setup() {
    return { ...useTable() };
  },
});
</script>

<style scoped>
.app__header {
  margin-top: 1rem;
  display: flex;
}

.app__header .separator {
  flex: 1;
}
</style>
