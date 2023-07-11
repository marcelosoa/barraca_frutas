import React from 'react'
import { View, Container, InputFormView } from './styled'

interface HeaderComponentProps {
  children: React.ReactNode
}

export default function HeaderComponent ({ children }: HeaderComponentProps) {
  return (
    <>
    <Container>
      <View>
      {children}
      </View>
    </Container>
    </>
  )
}