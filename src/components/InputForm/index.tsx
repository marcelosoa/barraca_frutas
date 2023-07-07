import { TextInput } from './styled'

interface InputProps {
  placeholder: string
}

export default function InputFormComponent({placeholder}: InputProps) {
  return (
    <TextInput placeholder={placeholder}/>
  )
}