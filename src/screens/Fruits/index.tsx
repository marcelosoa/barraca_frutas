import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Text, ViewText, Button, TextButton } from './styled'

export default function FruitsScreen() {
  return (
    <Container>
      <ViewText>
        <Text>Cadastre sua primeira fruta</Text>
      </ViewText>
      <Button>
          <Ionicons name='add' size={32} color={'#FFFFFF'} />
          <TextButton>Cadastrar Fruta</TextButton>
        </Button>
    </Container>

  )
}