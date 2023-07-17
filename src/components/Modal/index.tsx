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
import { ModalComponentProps } from "../../interface/modal-component.interface";

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
          <ButtonModal onPress={onPressButton} isPrimary={true}>
            <TextModal isPrimary={true}>{labelButton}</TextModal>
          </ButtonModal>
          <ButtonModal onPress={onPressCancelButton} isPrimary={false}>
            <TextModal isPrimary={false}>{labelCancelButton}</TextModal>
          </ButtonModal>
        </ButtonModalContainer>
      </ViewModal>
    </Modal>
  );
}
