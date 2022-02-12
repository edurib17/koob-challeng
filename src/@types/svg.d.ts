declare module '*.svg' {
  import React from 'react';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import Svg, {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
