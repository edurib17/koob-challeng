import React from 'react';
import {ButtonIcon} from '../../components/ButtonIcon';
import {
  Container,
  ContainerText,
  TextPrimary,
  TextSecondary,
  TextTertiary,
  ContainerButton,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ContainerText>
        <TextPrimary>Olá</TextPrimary>
        <TextSecondary>Bem vindo ao BRApp</TextSecondary>
        <TextTertiary>
          Aqui é possivel realizar buscas das informacoes mais relevantes, basta
          selecionar um tema abaixo.
        </TextTertiary>
      </ContainerText>
      <ContainerButton>
        <ButtonIcon title="Veiculos" icon="car-side" sizes="LARGE" />
      </ContainerButton>
    </Container>
  );
};

export default Home;
