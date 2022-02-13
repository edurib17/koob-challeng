import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerTags = styled.View`
  margin-top: 40px;
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
`;

export const ContainerButtons = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerButtonsTags = styled.View`
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: -10px;
`;

export const SeeMore = styled.TouchableOpacity`
  margin-top: 20px;
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
  margin-top: 100px;
  justify-content: space-between;
  padding: 25px;
`;
