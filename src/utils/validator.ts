import { ErrorType } from '../cores/types'
import { MAX_LENGTH_20_CHAR, MAX_LENGTH_50_CHAR, REQUIRED } from '../cores/errors'

export const validateProductName = (productName: string): ErrorType => {
  if (productName === undefined || productName === '') {
    return { status: false, message: REQUIRED }
  }
  if (productName.length >= 50) {
    return { status: false, message: MAX_LENGTH_50_CHAR }
  }
  return { status: true }
}

export const validateSKU = (sku: string): ErrorType => {
  if (sku === undefined || sku === '') {
    return { status: false, message: REQUIRED }
  }
  if (sku.length >= 20) {
    return { status: false, message: MAX_LENGTH_20_CHAR }
  }
  return { status: true }
}
