export interface Option {
  id: number,
  label: string
}

export interface CheckBoxComponentProps {
  options: Option[];
  onChange?: (selected: Option[]) => void;
}