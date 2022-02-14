import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex-direction: row;
  margin-left: 9px;
  flex-wrap: wrap;
  margin-top: ${getBottomSpace() + '56px'};
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #fc570c;
`;
