import React from 'react'
import { Container, SmallText, TextView, Text } from './styled'
import { Image } from 'react-native'
import ButtonComponent from '../../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { propsStack } from '../../../interface/routerinterface'

export default function SuccessFruit () {
  const navigation = useNavigation<propsStack>()
  return (
    <Container>
    <Image source={require('../../../../assets/images/confirmed.png')} />
    <TextView>
      <Text>Fornecedor Cadastrado</Text>
      <SmallText>Você cadastrou a fruta com sucesso!</SmallText>
    </TextView>
    <ButtonComponent
      label="Voltar ao início"
      onPress={() => navigation.navigate('RegisterFruit')}
    />
  </Container>
  )
}