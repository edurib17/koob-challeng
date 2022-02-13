import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerTags = styled.View`
  margin-top: 50px;
  margin-left: 15px;
`;

export const Description = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  color: #787878;
  margin-bottom: 29px;
`;

export const ContainerButtonsTags = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
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
  margin-top: 240px;
  justify-content: space-between;
  padding: 25px;
`;
