import React, { useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, Text, ViewText, Button, TextButton, ContainerFruits, ContentFruits, FruitCard } from './styled';
import { propsStack } from '../../interface/routerinterface';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import SearchComponent from '../../components/InputSearch';
import { fetchFruits } from '../../redux/reducers/fruitsReducer';
import { Fruit } from '../../redux/reducers/fruitsReducer';

export default function FruitsScreen() {
  const navigation = useNavigation<propsStack>();

  const fruits = useSelector((state: RootState) => state.fruits.fruits);
  console.log(fruits)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  return (
    <>
      {fruits.length > 0 ? (
        <ContainerFruits>
          <SearchComponent label='Pesquisar Frutas' />
          {fruits.map((fruit: Fruit) => (
            <ContentFruits key={fruit.id}>
              <FruitCard
                name={fruit.name}
                price={fruit.price}
                quantity={fruit.quantity}
                supplier={fruit.supplier}
              />
            </ContentFruits>
          ))}
        </ContainerFruits>
      ) : (
        <Container>
          <ViewText>
            <Text>Cadastre sua primeira fruta</Text>
          </ViewText>
          <Button onPress={() => navigation.navigate('RegistrarFrutas')}>
            <Ionicons name='add' size={32} color={'#FFFFFF'} />
            <TextButton>Cadastrar Fruta</TextButton>
          </Button>
        </Container>
      )}
    </>
  );
}
