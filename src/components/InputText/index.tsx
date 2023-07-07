import { Text } from "./styled";

interface InputProps {
  label: string
}

export default function InputTextComponent({label}: InputProps) {
  return (
    <Text>{label}</Text>
  )
}