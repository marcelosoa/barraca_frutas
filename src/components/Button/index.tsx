import React from 'react'
import { Button, TextButton } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ButtonComponentProps } from '../../interface/ButtonComponentInterface';

export default function ButtonComponent ({ label, onPress, style, children }: ButtonComponentProps) {
  return (
    <Button onPress={onPress} style={ style }>
        {children}
    </Button>
  )
}