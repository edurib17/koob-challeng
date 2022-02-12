import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Button, Text} from './styles';

const SIZES = {
  SMALL: {
    width: 110,
    height: 110,
    fontSize: 50,
  },
  LARGE: {
    width: 360,
    height: 315,
    fontSize: 157,
  },
};

type Props = TouchableOpacityProps & {
  title: string;
  icon: React.ComponentProps<typeof FontAwesome5>['name'];
  sizes?: 'LARGE' | 'SMALL';
  isSelected: boolean;
  onPress: any;
};

export function ButtonIcon({
  title,
  icon,
  sizes = 'SMALL',
  isSelected = false,
  onPress,
}: Props) {
  const {width, height, fontSize} = SIZES[sizes];
  return (
    <Button
      onPress={onPress}
      activeOpacity={0.7}
      isSelected={isSelected}
      style={{
        width,
        height,
      }}>
      <FontAwesome5
        name={icon}
        size={24}
        style={{fontSize, color: '#FC570C'}}
      />
      <Text>{title}</Text>
    </Button>
  );
}
