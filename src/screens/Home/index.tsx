import React, {useState} from 'react';
import {ButtonIcon} from '../../components/ButtonIcon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';
import {
  Container,
  ContainerText,
  TextPrimary,
  TextSecondary,
  TextTertiary,
  ContainerButton,
} from './styles';

type HomeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home: React.FC = () => {
  const [select, setIsSelected] = useState(false);
  const navigation = useNavigation<HomeScreenProp>();

  const nextScreen = () => {
    setIsSelected(!select);
    navigation.navigate('ChooseVehicle');
  };

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
        <ButtonIcon
          onPress={() => nextScreen()}
          title="Veiculos"
          icon="car-side"
          sizes="LARGE"
          isSelected={select}
        />
      </ContainerButton>
    </Container>
  );
};

export default Home;
