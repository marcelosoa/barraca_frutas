export interface ButtonComponentProps {
  label: string;
  onPress?: () => void;
  children?: React.ReactNode;
  style?: object;
  iconName?: string;
}