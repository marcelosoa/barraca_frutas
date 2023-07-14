import React from "react";
import {
  ViewModal,
  ModalText,
  ContentModal,
  ButtonModal,
  TextModal,
  ButtonModalContainer,
} from "./styled";
import Modal from "react-native-modal";
import { ModalComponentProps } from "../../interface/ModalComponentInterface";

export default function ModalComponent({
  isVisible,
  text,
  contentText,
  labelButton,
  labelCancelButton,
  onPressButton,
  onPressCancelButton
}: ModalComponentProps) {
  return (
    <Modal isVisible={isVisible}>
      <ViewModal>
        <ModalText>{text}</ModalText>
        <ContentModal>{contentText}</ContentModal>
        <ButtonModalContainer>
          <ButtonModal onPress={onPressButton}>
            <TextModal>{labelButton}</TextModal>
          </ButtonModal>
          <ButtonModal onPress={onPressCancelButton}>
            <TextModal>{labelCancelButton}</TextModal>
          </ButtonModal>
        </ButtonModalContainer>
      </ViewModal>
    </Modal>
  );
}
