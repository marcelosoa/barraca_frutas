import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

interface Option {
  id: string;
  label: string;
}

interface CheckBoxProps {
  options: Option[];
  onChange?: (selected: Option[]) => void;
}

export default function CheckBoxComponent({ options = [], onChange }: CheckBoxProps) {
  const [selected, setSelected] = React.useState<Option[]>([]);

  function handleToggleSelected(option: Option) {
    const isSelected = selected.some((item) => item.id === option.id);
    const updatedSelected = isSelected
      ? selected.filter((item) => item.id !== option.id)
      : [...selected, option];
    setSelected(updatedSelected);
  }

  React.useEffect(() => {
    onChange(selected);
  }, [selected, onChange]);

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <View key={option.id} style={styles.optionContainer}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => handleToggleSelected(option)}
          >
            <MaterialCommunityIcons
              name={selected.some((item) => item.id === option.id)
                ? 'checkbox-marked-outline'
                : 'checkbox-blank-outline'}
              size={24}
              color={selected.some((item) => item.id === option.id) ? 'black' : 'gray'}
            />
          </TouchableOpacity>
          <Text style={styles.opText}>{option.label}</Text>
        </View>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  opText: {
    marginLeft: 12,
    color: '#555',
    fontSize: 16,
    fontWeight: '600',
  },
  touchable: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
