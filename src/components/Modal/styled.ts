import styled from 'styled-components/native'

interface ContainerProps {
  danger: boolean
}

export const Overlay = styled.View`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.View<ContainerProps>`
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  width: 450px;

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.grey[900]
  )};
  }

  p {
    margin-top: 8px;
  }
`;

export const Text = styled.Text`

`

export const Footer = styled.View`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 16;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.grey[200]};
  }
`;

export const CancelButton = styled.TouchableOpacity``