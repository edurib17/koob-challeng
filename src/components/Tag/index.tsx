import React from 'react';
import {TagButton, Text} from './styles';

type Props = {
  title: string;
};

export function Tag({title}: Props) {
  return (
    <TagButton>
      <Text>{title}</Text>
    </TagButton>
  );
}
