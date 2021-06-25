import { ref } from 'vue'
import api from "../apis/index"
import { ColorList, ProductList } from '../cores/types'

export const fetchProductList = () => {
  const productList = ref<ProductList>([])
  const fetchProductListData = async (): Promise<void> => {
    const response = await api.getAllProducts()
    productList.value = response.data
  }

  return {
    productList,
    fetchProductListData
  }
}

export const fetchColorList = () => {
  const colorList = ref<ColorList>([])
  const fetchColorListData = async (): Promise<void> => {
    const response = await api.getAllColors()
    colorList.value = response.data
  }

  return {
    colorList,
    fetchColorListData
  }
}
