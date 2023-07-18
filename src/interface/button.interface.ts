export interface ButtonComponentProps {
  onPress?: () => void;
  children?: React.ReactNode;
  style?: object;
  iconName?: string;
}