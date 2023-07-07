import React from 'react';
import { View, Text, Button, TextButton, ViewButton } from './styled';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SupplierScreen() {
  return (
    <View>
      <Text> Cadastre seu primeiro fornecedor</Text>
      <ViewButton>
        <Button>
          <Ionicons name='add' size={32} color={'#FFFFFF'} />
          <TextButton>Cadastrar Fornecedor</TextButton>
        </Button>
      </ViewButton>
    </View>
  );
}
