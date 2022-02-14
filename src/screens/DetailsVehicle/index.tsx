import React, { useState } from "react";
import Clipboard from "@react-native-community/clipboard";
import { getData } from "../../hooks/getData";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";
import Feather from "react-native-vector-icons/Feather";
import { Button } from "../../components/Button";
import { Steps } from "../../components/Steps";
import {
  Container,
  ContainerDetails,
  ContainerSides,
  Description,
  SideLeft,
  SideRight,
  SideRightPrice,
  Footer,
  SideRightCopy,
} from "./styles";

type DetailVehicleScreenProp = StackNavigationProp<
  RootStackParamList,
  "DetailsVehicle"
>;
export function DetailsVehicle() {
  const navigation = useNavigation<DetailVehicleScreenProp>();
  const { details } = getData();

  return (
    <Container>
      <Steps step1 step2 step3 step4 step5 />
      <ContainerDetails>
        <Description>Dados do veiculo</Description>
        <ContainerSides>
          <SideLeft>Preço</SideLeft>
          <SideRightPrice>{details.Valor}</SideRightPrice>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Marca</SideLeft>
          <SideRight>{details.Marca}</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Modelo</SideLeft>
          <SideRight>{details.Modelo}</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Ano modelo</SideLeft>
          <SideRight>{details.AnoModelo}</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Combustivel</SideLeft>
          <SideRight>{details.Combustivel}</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Código FIPE</SideLeft>
          <SideRightCopy>
            <Feather
              onPress={() => Clipboard.setString(`${details.CodigoFipe}`)}
              name="copy"
              size={19}
              color="gray"
            />
            <SideRight selectable> {details.CodigoFipe}</SideRight>
          </SideRightCopy>
          
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Mês ref.</SideLeft>
          <SideRight>{details.MesReferencia}</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Sigla Combustivel</SideLeft>
          <SideRight>{details.SiglaCombustivel}</SideRight>
        </ContainerSides>
        <ContainerSides>
          <SideLeft>Tipo veiculo</SideLeft>
          <SideRight>{details.TipoVeiculo}</SideRight>
        </ContainerSides>
      </ContainerDetails>
      <Footer>
        <Button
          title="Voltar ao início"
          sizes="BACKGROUND"
          onPress={() => navigation.navigate("Home")}
        />
      </Footer>
    </Container>
  );
}
