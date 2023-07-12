import styled from 'styled-components/native'

interface FruitCards {
  name: string,
  price: string,
  quantity: number,
  supplier: string
}

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

export const ContentFruits = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;

`

export const FruitCard = styled.View<FruitCards>`
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 2px;
  background-color: violet;

`