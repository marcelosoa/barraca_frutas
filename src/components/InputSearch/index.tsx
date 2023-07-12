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
    elevation: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.6,
    shadowRadius: 6
  }
})