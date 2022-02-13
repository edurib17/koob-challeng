import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';
import {Button} from '../../components/Button';
import {Steps} from '../../components/Steps';
import {Tag} from '../../components/Tag';
import {
  Container,
  Description,
  ContainerTags,
  ContainerButtonsTags,
  SeeMore,
  SeeMoreText,
  Footer,
} from './styles';

type ChooseVehicleScreenProp = StackNavigationProp<
  RootStackParamList,
  'ChooseVehicle'
>;

export function ChooseModelVehicle() {
  const navigation = useNavigation<ChooseVehicleScreenProp>();
  const tags = [
    {id: 1, name: '100 2.8 V6'},
    {id: 2, name: '80 2.0'},
    {id: 3, name: '100 2.8 V6 Avant'},
    {id: 4, name: '80 S2 Avant'},
    {id: 5, name: 'A1 1.4 TFSI 122cv S-tronic'},
  ];

  return (
    <Container>
      <Steps step1 step2 step3 />
      <ContainerTags>
        <Description>Selecione o modelo do veiculo</Description>
        <ContainerButtonsTags>
          {tags.map((item, index) => (
            <Tag key={index} title={item.name} />
          ))}
        </ContainerButtonsTags>
        <SeeMore>
          <SeeMoreText>Ver mais...</SeeMoreText>
        </SeeMore>
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
          onPress={() => navigation.navigate('ChooseYearVehicle')}
        />
      </Footer>
    </Container>
  );
}
