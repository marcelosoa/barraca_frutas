import React from 'react'
import { Container, SmallText, TextView, Text } from './styled'
import { Image } from 'react-native'
import ButtonComponent from '../../../components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { propsStack } from '../../../interface/routerinterface'

export default function SuccessFruitScreen () {
  const navigation = useNavigation<propsStack>()
  const params = useRoute()
  return (
    <Container>
    <Image source={require('../../../../assets/images/confirmed.png')} />
    <TextView>
      <Text>Fornecedor Cadastrado</Text>
      <SmallText>Você cadastrou o fornecedor {params?.params?.name} com sucesso!</SmallText>
    </TextView>
    <ButtonComponent
      label="Voltar ao início"
      onPress={() => navigation.navigate('Frutas')}
    />
  </Container>
  )
}