import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Button} from '../../components/Button';
import {Steps} from '../../components/Steps';
import {
  Container,
  ContainerDetails,
  ContainerSides,
  Description,
  SideLeft,
  SideRight,
  SideRightPrice,
  ContainerButton,
} from './styles';

export function DetailsVehicle() {
  return (
    <Container>
      <Steps step1 step2 step3 step4 step5 />
      <ContainerDetails>
        <Description>Dados do veiculo</Description>
        <ContainerSides>
          <SideLeft>Preço</SideLeft>
          <SideRightPrice>R$ 19.102,00</SideRightPrice>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Marca</SideLeft>
          <SideRight>Audi</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Modelo</SideLeft>
          <SideRight>80 S2 Avant</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Ano modelo</SideLeft>
          <SideRight>1995</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Combustivel</SideLeft>
          <SideRight>Gasolina</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Código FIPE</SideLeft>

          <SideRight>
            {' '}
            <Feather name="copy" size={19} color="gray" /> 008004-7
          </SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Mês ref.</SideLeft>
          <SideRight>janeiro de 2022</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Sigla Combustivel</SideLeft>
          <SideRight>G</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Tipo veiculo</SideLeft>
          <SideRight>1</SideRight>
        </ContainerSides>
      </ContainerDetails>
      <ContainerButton>
        <Button title="Voltar ao início" sizes="BACKGROUND" />
      </ContainerButton>
    </Container>
  );
}
