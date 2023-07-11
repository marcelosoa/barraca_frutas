export interface InputFormProps {
  placeholder?: string;
  label?: string;
  onChange?: (value: any) => void;
  limitCaracter?: number;
  errors?: string;
  value: string
}