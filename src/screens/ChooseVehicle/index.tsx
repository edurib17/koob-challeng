import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackPrams';
import {Button} from '../../components/Button';
import {ButtonIcon} from '../../components/ButtonIcon';
import {Steps} from '../../components/Steps';
import {Tag} from '../../components/Tag';
import {
  Container,
  Description,
  ContainerButtons,
  ContainerButtonsTags,
  SeeMore,
  SeeMoreText,
  Footer,
  ContainerVehicle,
} from './styles';

type ChooseVehicleScreenProp = StackNavigationProp<
  RootStackParamList,
  'ChooseVehicle'
>;

export function ChooseVehicle() {
  const [selected, setSelected] = useState('');
  const [car, setCar] = useState(Boolean);
  const [motorcycle, setMotorcycle] = useState(Boolean);
  const [truck, setTruck] = useState(Boolean);
  const navigation = useNavigation<ChooseVehicleScreenProp>();

  const tags = [
    {id: 1, name: 'BMW'},
    {id: 2, name: 'Audi'},
    {id: 3, name: 'Citroën'},
    {id: 4, name: 'GM - Chevrolet'},
    {id: 5, name: 'Honda'},
  ];

  const handleSelect = (vehicle_params: React.SetStateAction<string>) => {
    switch (vehicle_params) {
      case 'carros':
        setTruck(false);
        setMotorcycle(false);
        setCar(!car);
        setSelected(vehicle_params);
        break;
      case 'motos':
        setTruck(false);
        setCar(false);
        setMotorcycle(!motorcycle);
        setSelected(vehicle_params);
        break;
      case 'caminhoes':
        setCar(false);
        setMotorcycle(false);
        setTruck(!truck);
        setSelected(vehicle_params);
        break;
      default:
    }
  };

  return (
    <Container>
      {console.log(selected)}
      <Steps step1 step2 />
      <ContainerVehicle>
        <Description>Selecione o tipo de veiculo</Description>
        <ContainerButtons>
          <ButtonIcon
            title="Carros"
            icon="car-side"
            sizes="SMALL"
            isSelected={car}
            onPress={() => handleSelect('carros')}
          />

          <ButtonIcon
            title="Motos"
            icon="motorcycle"
            sizes="SMALL"
            isSelected={motorcycle}
            onPress={() => handleSelect('motos')}
          />
          <ButtonIcon
            title="Caminhões"
            icon="truck"
            sizes="SMALL"
            isSelected={truck}
            onPress={() => handleSelect('caminhoes')}
          />
        </ContainerButtons>
        <Description>Selecione a marca do veiculo</Description>
        <ContainerButtonsTags>
          {tags.map((item, index) => (
            <Tag key={index} title={item.name} />
          ))}
        </ContainerButtonsTags>
        <SeeMore>
          <SeeMoreText>Ver mais...</SeeMoreText>
        </SeeMore>
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
          onPress={() => navigation.navigate('ChooseModelVehicle')}
        />
      </Footer>
    </Container>
  );
}
