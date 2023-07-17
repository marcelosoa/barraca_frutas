import React from 'react'
import { Button } from "./styled";
import { ButtonComponentProps } from '../../interface/button.interface';

export default function ButtonComponent ({ label, onPress, style, children }: ButtonComponentProps) {
  return (
    <Button onPress={onPress} style={ style }>
        {children}
    </Button>
  )
}