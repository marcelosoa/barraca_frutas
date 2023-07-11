export interface Option {
  id: string,
  label: string
}

export interface CheckBoxComponentProps {
  options: Option[];
  onChange?: (selected: Option[]) => void;
}