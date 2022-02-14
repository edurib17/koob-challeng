import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Description = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #787878;
  margin-top: 40px;
  margin-bottom: 35px;
`;

export const ContainerDetails = styled.View`
  flex: 4;
  padding: 15px;
`;

export const ContainerSides = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 9px;
`;

export const SideLeft = styled.Text`
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 29px;
  color: #fc570c;
`;

export const SideRight = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 29px;
  color: #fc570c;
`;

export const SideRightCopy = styled.TouchableOpacity`
  color: gray;
  flex-direction: row;
  margin-left: 197px;
`;

export const SideRightPrice = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 29px;
  line-height: 35px;
  color: #fc570c;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
