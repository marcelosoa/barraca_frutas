import React from 'react'
import { Button, TextButton } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';

interface ButtonProps {
  label: string
}

export default function ButtonComponent ({ label }: ButtonProps) {
  return (
    <Button>
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