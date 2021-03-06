import styled from "styled-components/native";

type Props = {
  isSelected: boolean;
};

export const TagButton = styled.TouchableOpacity`
  height: 46px;
  padding-left: 35px;
  padding-right: 35px;
  margin-left: 5px;
  margin-top: 14px;
  background: #fafafa;
  border: ${({ isSelected }: Props) =>
    isSelected ? "1px solid #fc570c" : "none"};
  box-sizing: border-box;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #fc570c;
`;
