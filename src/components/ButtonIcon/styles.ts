import styled from 'styled-components/native';

type Props = {
  isSelected: boolean;
};

export const Button = styled.TouchableOpacity`
  width: 366px;
  height: 315px;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border: ${({isSelected}: Props) =>
    isSelected ? '1px solid #fc570c' : 'none'};
  box-sizing: border-box;
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  margin-top: 20px;
`;
