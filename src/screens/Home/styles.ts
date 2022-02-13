import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e5e5e5;
`;

export const ContainerText = styled.View`
  justify-content: center;
  padding: 10px;
  margin-top: ${getBottomSpace() + '56px'};
`;

export const TextPrimary = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;
  color: #686868;
`;

export const TextSecondary = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 29px;
  color: #686868;
`;

export const TextTertiary = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #686868;
  margin-top: 14px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  margin-top: 68px;
`;
