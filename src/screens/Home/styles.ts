import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #e5e5e5;
`;

export const ContainerText = styled.View`
  justify-content: center;
  padding: 10px;
  margin-top: 50px;
`;

export const TextPrimary = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
`;

export const TextSecondary = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  margin-bottom: 23px;
  color: #686868;
`;

export const TextTertiary = styled.Text`
  font-style: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
`;

export const ContainerButton = styled.View`
  flex: 1;
  margin-top: 68px;
`;
