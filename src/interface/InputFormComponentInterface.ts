import { KeyboardTypeOptions } from 'react-native';

export interface InputFormProps {
  placeholder?: string;
  label?: string;
  onChangeText?: (value: any) => void;
  limitCaracter?: number;
  errors?: string;
  value: any;
  keyboardType?: KeyboardTypeOptions;
}