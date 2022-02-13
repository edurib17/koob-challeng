import React from 'react';
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

export function ChooseYearVehicle() {
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
        <Button sizes="NOBACKGROUND" title="Voltar" />
        <Button sizes="BACKGROUND" title="Próximo" />
      </Footer>
    </Container>
  );
}
