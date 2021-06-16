import client from './client'

import { ProductList, ColorList } from '../cores/types'
import { AxiosResponse } from 'axios'

// [GET]
const getAllProducts = (): Promise<AxiosResponse<ProductList>> => {
  return client.get<ProductList>('/products')
}

const getAllColors = (): Promise<AxiosResponse<ColorList>> => {
  return client.get<ColorList>('/colors')
}

// [POST]
// [PUT]
// [DELETE]

export default {
  getAllProducts,
  getAllColors
}
