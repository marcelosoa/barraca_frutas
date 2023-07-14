import React from 'react'
import { Container, SearchInput } from './styled'
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from 'react-native'
import { SearchComponentProps } from '../../interface/InputSearchComponentInterface';

export default function SearchComponent ({ label, onChangeText }: SearchComponentProps) {
  return (
    <Container style={styled.inputSearch}>
      <Ionicons size={26} name='search'/>
      <SearchInput
        placeholder={label}
        onChangeText={onChangeText}
      />
    </Container>
  )
}

const styled = StyleSheet.create({
  inputSearch: {
    backgroundColor: '#FFFFFF',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: 8
  }
})
