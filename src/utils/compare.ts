import { Product } from "../cores/types"

export const productIsEqualToEachOther = (_this: Product, _other: Product): boolean => {
  if (_this.name !== _other.name) {
    return false
  }
  if (_this.sku !== _other.sku) {
    return false
  }
  if (_this.color !== _other.color) {
    return false
  }
  return true
}
