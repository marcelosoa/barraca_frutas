import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Container, ContainerView, Button, Text } from './styled'
import { CheckBoxComponentProps, Option } from '../../interface/CheckBoxComponentInterface';

interface CheckBoxProps {
  options: Option[];
  onChange?: (selected: Option[]) => void;
}

export default function CheckBoxComponent({ options = [], onChange }: CheckBoxComponentProps) {
  const [selected, setSelected] = React.useState<Option[]>([]);

  function handleToggleSelected(option: Option) {
    const isSelected = selected.some((item) => item.id === option.id);
    const updatedSelected = isSelected
      ? selected.filter((item) => item.id !== option.id)
      : [...selected, option];
    setSelected(updatedSelected);
  }

  return (
    <Container>
      {options.map((option) => (
        <ContainerView key={option.id}>
          <Button
            onPress={() => handleToggleSelected(option)}
          >
            <MaterialCommunityIcons
              name={selected.some((item) => item.id === option.id)
                ? 'checkbox-marked-outline'
                : 'checkbox-blank-outline'}
              size={24}
              color={selected.some((item) => item.id === option.id) ? 'red' : 'black'}
            />
          </Button>
          <Text>{option.label}</Text>
        </ContainerView>
      ))}
    </Container>
  );
}
