import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  icon?: string;
}

const Link: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      {children}
    </S.Container>
  );
};

export default Link;
