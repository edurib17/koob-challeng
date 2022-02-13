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
  'ChooseYearVehicle'
>;

export function ChooseYearVehicle() {
  const navigation = useNavigation<ChooseVehicleScreenProp>();
  const tags = [
    {id: 1, name: '1995-1 Gasolina'},
    {id: 2, name: '1994-1 Gasolina'},
  ];

  return (
    <Container>
      <Steps step1 step2 step3 step4 />
      <ContainerTags>
        <Description>Selecione o ano do veiculo</Description>
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
          onPress={() => navigation.navigate('DetailsVehicle')}
        />
      </Footer>
    </Container>
  );
}
