import React, {useState} from 'react';
import {Button} from '../../components/Button';
import {ButtonIcon} from '../../components/ButtonIcon';
import {Steps} from '../../components/Steps';
import {Tag} from '../../components/Tag';
import {
  Container,
  Description,
  ContainerTags,
  ContainerButtons,
  ContainerButtonsTags,
  SeeMore,
  SeeMoreText,
  Footer,
} from './styles';

export function ChooseVehicle() {
  const [selected, setSelected] = useState('');
  const [car, setCar] = useState(Boolean);
  const [motorcycle, setMotorcycle] = useState(Boolean);
  const [truck, setTruck] = useState(Boolean);

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
      <ContainerTags>
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
      </ContainerTags>
      <ContainerTags>
        <Description>Selecione a marca do veiculo</Description>
        <ContainerButtonsTags>
          {tags.map((item, index) => (
            <Tag key={index} title={item.name} />
          ))}
        </ContainerButtonsTags>
        <SeeMore>
          <SeeMoreText>Ver mais</SeeMoreText>
        </SeeMore>
      </ContainerTags>
      <Footer>
        <Button sizes="NOBACKGROUND" title="Voltar" />
        <Button sizes="BACKGROUND" title="Próximo" />
      </Footer>
    </Container>
  );
}
