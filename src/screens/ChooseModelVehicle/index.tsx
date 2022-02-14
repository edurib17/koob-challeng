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

type ChooseModelVehicleScreenProp = StackNavigationProp<
  RootStackParamList,
  "ChooseModelVehicle"
>;

export function ChooseModelVehicle() {
  const { models, getYear } = getData();
  const [value, setValue] = useState(3);
  const [model, setModel] = useState("");
  const navigation = useNavigation<ChooseModelVehicleScreenProp>();

  const handleSelectTag = (model_params: any) => {
    setModel(model_params.nome);
    getYear(model_params);
  };

  return (
    <Container>
      <Steps step1 step2 step3 />
      <ContainerTags>
        <Description>Selecione o modelo do veiculo</Description>
        <ContainerButtonsTags
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          {models.slice(0, value).map((item: any, index) => (
            <Tag
              key={index}
              title={item.nome}
              isSelected={item.nome === model ? true : false}
              onPress={() => handleSelectTag(item)}
            />
          ))}
        </ContainerButtonsTags>
        {value == 3 && models.length > 3 ? (
          <SeeMore onPress={() => setValue(models.length)}>
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
          disabled={ model ? false : true}
          onPress={() => navigation.navigate("ChooseYearVehicle")}
        />
      </Footer>
    </Container>
  );
}
