import { TableFields } from "./types"

// App Name
export const APP_NAME: string = 'Jason Re-upload Error Product'

// Modal
export const MODAL_TITLE: string = 'Re-upload Product'
export const EMPTY_NOTIFICATION: string = 'No Item Was Updated'

// Base API URL
export const BASE_API_URL: string = 'https://60ae0d5e80a61f00173324bc.mockapi.io/'

// Table Fields
export const TABLE_FIELDS: TableFields = [
  {
    id: 'id',
    name: 'ID',
  },
  {
    id: 'error_description',
    name: 'Error Description',
  },
  {
    id: 'product_image',
    name: 'Product Image',
  },
  {
    id: 'product_name',
    name: 'Product Name',
  }, {
    id: 'sku',
    name: 'SKU',
  },
  {
    id: 'color',
    name: 'Color',
  }
]
