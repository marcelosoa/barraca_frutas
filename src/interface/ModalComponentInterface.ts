export interface ModalComponentProps {
  isVisible: boolean,
  text: string,
  contentText: string
  labelButton: string
  labelCancelButton: string
  onPressButton: () => void
  onPressCancelButton: () => void
}