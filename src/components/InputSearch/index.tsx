import React from 'react'
import { Container, SearchInput } from './styled'
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from 'react-native'
import { SearchComponentProps } from '../../interface/InputSearchComponentInterface';

export default function SearchComponent ({ label }: SearchComponentProps) {
  return (
    <Container style={styled.inputSearch}>
      <Ionicons size={26} name='search'/>
      <SearchInput placeholder={label} />
    </Container>
  )
}

const styled = StyleSheet.create({
  inputSearch: {
    backgroundColor: '#FFFFFF',
    elevation: 6, // Sombra no Android
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 1,
    shadowRadius: 6,
  }
})