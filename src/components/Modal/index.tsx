import React from 'react'
import { ViewModal, ModalText, ContentModal } from './styled'
import Modal from "react-native-modal";

interface ModalProps {
  isVisible: boolean,
  text: string,
  contentText: string
}

export default function ModalComponent({ isVisible, text, contentText }: ModalProps) {
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