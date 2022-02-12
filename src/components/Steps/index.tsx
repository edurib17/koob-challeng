import React from 'react';
import {Container, Text} from './styles';

type Props = {
  step1?: boolean;
  step2?: boolean;
  step3?: boolean;
  step4?: boolean;
  step5?: boolean;
};

export function Steps({
  step1 = false,
  step2 = false,
  step3 = false,
  step4 = false,
  step5 = false,
}: Props) {
  return (
    <Container>
      {step1 && <Text> Veiculos {'>'} </Text>}

      {step2 && <Text> Carros </Text>}

      {step3 && <Text>{'>'} Carros </Text>}

      {step4 && <Text>{'>'} Audi </Text>}

      {step5 && <Text>{'>'} 1995-1 Gasolina </Text>}
    </Container>
  );
}
