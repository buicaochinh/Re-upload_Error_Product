import { ProductList } from "../cores/types";

export const totalPages = (list: ProductList, nrows = 10): number => {
  return Math.ceil(list.length / nrows)
}

export const pagination = (list: ProductList, cur: number = 1, nrows: number = 10): ProductList => {
  const total = Math.ceil(list.length / nrows)
  const start = (cur - 1) * nrows
  const end = cur === total ? list.length : start + nrows
  return list.slice(start, end)
};
