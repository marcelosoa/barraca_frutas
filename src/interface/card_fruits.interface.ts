export interface CardFruitProps {
  name: string
  price: string
  quantity: string,
  supplier: string
  isModalCheck: () => void
  onCardPress?: any
  isHighlighted: boolean
}