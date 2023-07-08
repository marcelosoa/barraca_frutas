import React from 'react'
import { Button, TextButton } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';

interface ButtonProps {
  label: string
  onPress?: () => void
}

export default function ButtonComponent ({ label, onPress}: ButtonProps) {
  return (
    <Button onPress={onPress}>
      <TextButton>
        {label}
        </TextButton>
      <Ionicons 
      name='chevron-forward' 
      size={32} 
      color={'#DA0D1E'} 
      />
    </Button>
  )
}