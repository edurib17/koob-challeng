import React, { useState } from "react";
import { getData } from "../../hooks/getData";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../RootStackPrams";
import { Button } from "../../components/Button";
import { Steps } from "../../components/Steps";
import { Tag } from "../../components/Tag";
import {
  Container,
  Description,
  ContainerTags,
  ContainerButtonsTags,
  SeeMore,
  SeeMoreText,
  Footer,
} from "./styles";

type ChooseYearVehicleScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChooseYearVehicle"
>;

export function ChooseYearVehicle() {
  const navigation = useNavigation<ChooseYearVehicleScreenProp>();
  const [value, setValue] = useState(3);
  const [year, setYear] = useState("");
  const { years,getDetails } = getData();

  const handleSelectTag = (item: any) => {
    setYear(item.nome);
    getDetails(item)
  };

  return (
    <Container>
      <Steps step1 step2 step3 step4 />
      <ContainerTags>
        <Description>Selecione o ano do veiculo</Description>
        <ContainerButtonsTags
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {years.slice(0, value).map((item: any, index) => (
            <Tag
              key={index}
              title={item.nome}
              isSelected={item.nome === year ? true : false}
              onPress={() => handleSelectTag(item)}
            />
          ))}
        </ContainerButtonsTags>
        {value == 3 && years.length > 3 ? (
          <SeeMore onPress={() => setValue(years.length)}>
            <SeeMoreText>Ver mais...</SeeMoreText>
          </SeeMore>
        ) : null}
      </ContainerTags>
      <Footer>
        <Button
          sizes="NOBACKGROUND"
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
        <Button
          sizes="BACKGROUND"
          title="Próximo"
          disabled={year ? false : true}
          onPress={() => navigation.navigate("DetailsVehicle")}
        />
      </Footer>
    </Container>
  );
}
