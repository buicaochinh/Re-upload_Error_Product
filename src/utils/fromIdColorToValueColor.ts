import { ColorList } from "src/cores/types"

export const fromIdColorToValueColor = (id: number, colorList: ColorList) => {
  let result = ""
  colorList.forEach(item => {
    if (item.id === id) {
      result = item.name
    }
  })
  return result
}
