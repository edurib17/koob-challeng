import React from "react";
import { TouchableOpacityProps } from "react-native";
import { TagButton, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isSelected?: boolean;
  onPress?: () => void;
};

export function Tag({ title, isSelected = false, onPress }: Props) {
  return (
    <TagButton isSelected={isSelected} onPress={onPress}>
      <Text>{title}</Text>
    </TagButton>
  );
}
