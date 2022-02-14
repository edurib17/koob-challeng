import React from "react";
import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Text } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  sizes: "BACKGROUND" | "NOBACKGROUND";
  disabled?: boolean;
  onPress?: () => void;
};

export function Button({
  title,
  sizes = "BACKGROUND",
  disabled,
  onPress,
}: Props) {
  const SIZES = {
    BACKGROUND: {
      width: 187,
      height: 45,
      backgroundColor: `${disabled ? "rgba(252, 87, 12, 0.44)":"#fc570c"}`,
      textDecorationLine: "none",
      color: "#ffffff",
    },
    NOBACKGROUND: {
      width: undefined,
      height: undefined,
      backgroundColor: undefined,
      textDecorationLine: "underline",
      color: "#FC570C",
    },
  };
  const { width, height, backgroundColor, textDecorationLine, color } =
    SIZES[sizes];
  return (
    <ButtonContainer
      disabled={disabled}
      style={{ width, height, backgroundColor }}
      onPress={onPress}
    >
      <Text
        style={{
          color,
          textDecorationLine,
        }}
      >
        {title}
      </Text>
    </ButtonContainer>
  );
}
