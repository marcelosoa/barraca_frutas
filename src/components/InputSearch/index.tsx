import React from 'react'
import { Container, SearchInput } from './styled'
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from 'react-native'
import { SearchComponentProps } from '../../interface/InputSearchComponentInterface';

export default function SearchComponent ({ label }: SearchComponentProps) {
  return (
    <Container>
      <Ionicons size={26} name='search'style={styled.inputSearch}/>
      <SearchInput placeholder={label} />
    </Container>
  )
}

const styled = StyleSheet.create({
  inputSearch: {
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  }
})