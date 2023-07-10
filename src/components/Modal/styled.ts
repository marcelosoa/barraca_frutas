import styled from 'styled-components/native'


export const ViewModal = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 8px;
  background-color:  ${({ theme }) => theme.colors.shape };
  gap: 16px;
  padding: 24px;
  flex-direction: column;
`

export const ModalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  gap: 16px;
`

export const ContentModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
`