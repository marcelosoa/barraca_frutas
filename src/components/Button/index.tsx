import React from 'react'
import { Button, TextButton } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonComponentProps } from '../../interface/ButtonComponentInterface';

export default function ButtonComponent ({ label, onPress }: ButtonComponentProps) {
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