import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ViewText = styled.View`
  width: 100%;
  margin-bottom: 50px;
`


export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  gap: 8px;
  padding: 8px 16px;
  border-radius: 30px;
  width: 100%;
`;

export const TextButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium };
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: ${({ theme }) => theme.text.primary};
`;

export const ContainerFruits = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex: 1;
  padding-top: 48px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 16px;
  flex-direction: column;
  gap: 8px;
`

export const ContentFruits = styled.TouchableOpacity`
  padding-top: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  background-color: yellow;

`

export const FruitCard = styled.View`
  
`

export const FruitText = styled.Text`

`

export const NewFruitButton = styled.TouchableOpacity`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 16px;
  right: 16px;
`
export const FruitButtonIcon = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary };
  color: ${({ theme }) => theme.colors.background };
  padding: 16px;
  border-radius: 24px;

`
export const ViewModalize = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 16px;
`

export const ButtonInsideModal = styled.TouchableOpacity`
  padding: 16px 0;
  gap: 8px;
  align-items: center;
`

export const TextButtonModal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: 13px;
  font-style: normal;
`