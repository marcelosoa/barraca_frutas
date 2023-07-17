import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ContainerView, Button, Text, Rectangle } from './styled';
import { CheckBoxComponentProps, Option } from '../../interface/checkbox-component.interface';
import { View } from 'react-native';

export default function CheckBoxComponent({ options = [], onChange, value }: CheckBoxComponentProps) {
  const [selected, setSelected] = React.useState<Option[]>(() => {
    if (Array.isArray(value)) {
      return value.map((item) => (typeof item === 'string' ? { id: 0, label: item } : item));
    }
    return [];
  });

  function handleToggleAll() {
    if (selected.length === options.length) {
      setSelected([]);
    } else {
      setSelected(options);
    }

    if (onChange) {
      onChange(selected.length !== options.length ? options : []);
    }
  }

  function handleToggleSelected(option: Option) {
    const isSelected = selected.some((item) => item.id === option.id);
    const updatedSelected = isSelected
      ? selected.filter((item) => item.id !== option.id)
      : [...selected, option];
    setSelected(updatedSelected);

    if (onChange) {
      onChange(updatedSelected);
    }
  }

  return (
    <Container>
      <ContainerView>
        <Button onPress={handleToggleAll}>
          <Ionicons
            name={selected.length === options.length ? 'md-square-sharp' : 'md-square-outline'}
            size={32}
            color={selected.length === options.length ? 'red' : 'black'}
          />
        </Button>
        <Text>Todas</Text>
      </ContainerView>
      <View style={{
        marginLeft: 16,
      }}>
      {options.map((option, index) => (
        <ContainerView key={option.id}>
          <Button onPress={() => handleToggleSelected(option)}>
            <Ionicons
              name={selected.some((item) => item.id === option.id) ? 'md-square-sharp' : 'md-square-outline'}
              size={32}
              color={selected.some((item) => item.id === option.id) ? 'red' : 'black'}
            />
          </Button>
          <Text>{option.label}</Text>
        </ContainerView>
      ))}
      </View>
      
    </Container>
  );
}
