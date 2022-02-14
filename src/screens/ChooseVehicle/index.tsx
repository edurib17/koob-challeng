import React, { useState, useEffect } from "react";
import { getData } from "../../hooks/getData";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";
import { Button } from "../../components/Button";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Steps } from "../../components/Steps";
import { Tag } from "../../components/Tag";
import {
  Container,
  Description,
  ContainerButtons,
  ContainerButtonsTags,
  SeeMore,
  SeeMoreText,
  Footer,
  ContainerVehicle,
} from "./styles";

type ChooseVehicleScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChooseVehicle"
>;

export function ChooseVehicle() {
  const [selected, setSelected] = useState("");
  const [car, setCar] = useState(Boolean);
  const [brand, setBrand] = useState("");
  const [motorcycle, setMotorcycle] = useState(Boolean);
  const [truck, setTruck] = useState(Boolean);
  const [value, setValue] = useState(3);
  const navigation = useNavigation<ChooseVehicleScreenProp>();
  const { getBrands, brands, getModels } = getData();

  useEffect(() => {
    getBrands("carros");
  }, []);

  const handleSelect = (vehicle_params: React.SetStateAction<string>) => {
    switch (vehicle_params) {
      case "Carros":
        setTruck(false);
        setMotorcycle(false);
        setCar(!car);
        setValue(3);
        setBrand("")
        getBrands(vehicle_params);
        setSelected(vehicle_params);
        break;
      case "Motos":
        setTruck(false);
        setCar(false);
        setValue(3);
        setBrand("")
        setMotorcycle(!motorcycle);
        getBrands(vehicle_params);
        setSelected(vehicle_params);
        break;
      case "Caminhoes":
        setCar(false);
        setMotorcycle(false);
        setTruck(!truck);
        setValue(3);
        setBrand("")
        getBrands(vehicle_params);
        setSelected(vehicle_params);
        break;
      default:
    }
  };

  const handleSelectTag = (brand_params: any) => {
    setBrand(brand_params.nome);
    getModels(brand_params);
  };

  return (
    <Container>
      <Steps step1 step2 />
      <ContainerVehicle>
        <Description>Selecione o tipo de veiculo</Description>
        <ContainerButtons>
          <ButtonIcon
            title="Carros"
            icon="car-side"
            sizes="SMALL"
            isSelected={car}
            onPress={() => handleSelect("Carros")}
          />

          <ButtonIcon
            title="Motos"
            icon="motorcycle"
            sizes="SMALL"
            isSelected={motorcycle}
            onPress={() => handleSelect("Motos")}
          />
          <ButtonIcon
            title="Caminhões"
            icon="truck"
            sizes="SMALL"
            isSelected={truck}
            onPress={() => handleSelect("Caminhoes")}
          />
        </ContainerButtons>
        <Description>Selecione a marca do veiculo</Description>
        <ContainerButtonsTags
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {brands.slice(0, value).map((item: any, index) => (
            <Tag
              key={index}
              title={item.nome}
              isSelected={item.nome === brand ? true : false}
              onPress={() => handleSelectTag(item)}
            />
          ))}
        </ContainerButtonsTags>
        {value == 3 ? (
          <SeeMore onPress={() => setValue(brands.length)}>
            <SeeMoreText>Ver mais...</SeeMoreText>
          </SeeMore>
        ) : null}
      </ContainerVehicle>
      <Footer>
        <Button
          sizes="NOBACKGROUND"
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
        <Button
          sizes="BACKGROUND"
          title="Próximo"
          disabled={selected && brand ? false : true}
          onPress={() => navigation.navigate("ChooseModelVehicle")}
        />
      </Footer>
    </Container>
  );
}
