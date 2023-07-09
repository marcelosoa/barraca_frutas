import React from 'react'
import { Container, SearchInput } from './styled'
import Ionicons from "@expo/vector-icons/Ionicons";

interface SearchProps {
  label: string
}

export default function SearchComponent ({ label }: SearchProps) {
  return (
    <Container>
      {/* <Ionicons size={26} name='search'/> */}
      <SearchInput placeholder={label} />
    </Container>
  )
}