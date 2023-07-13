import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Container, ContainerView, Button, Text } from './styled'
import { CheckBoxComponentProps, Option } from '../../interface/CheckBoxComponentInterface';

export default function CheckBoxComponent({ options = [], onChange }: CheckBoxComponentProps) {
  const [selected, setSelected] = React.useState<Option[]>([]);

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
      <ContainerView key="selectAll">
        <Button onPress={handleToggleAll}>
          <Ionicons
            name={selected.length === options.length ? 'md-square-sharp' : 'md-square-outline'}
            size={32}
            color={selected.length === options.length ? 'red' : 'black'}
          />
        </Button>
        <Text>Todas</Text>
      </ContainerView>
      {options.map((option) => (
        <ContainerView key={option.id}>
          <Button
            onPress={() => handleToggleSelected(option)}
          >
            <Ionicons
              name={selected.some((item) => item.id === option.id)
                ? 'md-square-sharp'
                : 'md-square-outline'}
              size={32}
              color={selected.some((item) => item.id === option.id) ? 'red' : 'black'}
            />
          </Button>
          <Text>{option.label}</Text>
        </ContainerView>
      ))}
    </Container>
  );
}
