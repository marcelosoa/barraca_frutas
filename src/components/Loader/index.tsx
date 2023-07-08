import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { Container, Loader } from './styled'


export default function LoaderComponent () {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

