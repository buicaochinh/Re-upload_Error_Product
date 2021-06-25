// Field Type
export interface Field {
  id: string,
  name: string
}

export type TableFields = Field[]

// Product Type
export interface Product {
  [index: string]: number | string;
  id: number,
  errorDescription: string,
  image: string,
  name: string,
  sku: string,
  color: number | string
}

export type ProductList = Product[]

// Color Type
export interface Color {
  id: number,
  name: string
}

export type ColorList = Color[]

// Error Type
export interface ErrorType {
  status: boolean,
  message?: string
}
