import React from 'react'
import { ViewModal, ModalText, ContentModal } from './styled'
import Modal from "react-native-modal";
import { ModalComponentProps } from '../../interface/ModalComponentInterface';

export default function ModalComponent({ isVisible, text, contentText }: ModalComponentProps) {
  return (
    <Modal isVisible={isVisible}>
      <ViewModal>
        <ModalText>{text}</ModalText>
        <ContentModal>
        {contentText}
        </ContentModal>
      </ViewModal>
    </Modal>
  )
}