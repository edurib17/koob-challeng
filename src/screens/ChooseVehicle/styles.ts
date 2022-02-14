import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const ContainerVehicle = styled.View`
  flex: 1;
  height: auto;
  margin-left: 15px;
  padding-right: 25px;
`;

export const Description = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #787878;
  margin-bottom: 29px;
  margin-top: 41px;
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2px;
`;

export const ContainerButtonsTags = styled.ScrollView`
  flex: 1;
  margin-top: -25px;
`;

export const SeeMore = styled.TouchableOpacity`
  flex: 1;
  margin-left: 10px;
`;

export const SeeMoreText = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  text-decoration-line: underline;
  color: #fc570c;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
  margin-bottom: 10px;
`;
