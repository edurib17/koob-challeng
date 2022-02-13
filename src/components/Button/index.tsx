import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {ButtonContainer, Text} from './styles';

const SIZES = {
  BACKGROUND: {
    width: 187,
    height: 45,
    backgroundColor: '#fc570c',
    textDecorationLine: 'none',
    color: '#ffffff',
  },
  NOBACKGROUND: {
    width: undefined,
    height: undefined,
    backgroundColor: undefined,
    textDecorationLine: 'underline',
    color: '#FC570C',
  },
};

type Props = TouchableOpacityProps & {
  title: string;
  sizes: 'BACKGROUND' | 'NOBACKGROUND';
  onPress?: () => void;
};

export function Button({title, sizes = 'BACKGROUND', onPress}: Props) {
  const {width, height, backgroundColor, textDecorationLine, color} =
    SIZES[sizes];
  return (
    <ButtonContainer style={{width, height, backgroundColor}} onPress={onPress}>
      <Text
        style={{
          color,
          textDecorationLine,
        }}>
        {title}
      </Text>
    </ButtonContainer>
  );
}
