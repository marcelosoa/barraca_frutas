export interface InputFormProps {
  placeholder?: string;
  label?: string;
  onChangeText?: (value: any) => void;
  limitCaracter?: number;
  errors?: string;
  value: string
}