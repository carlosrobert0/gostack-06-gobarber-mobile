import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';
import Link from '../Link';

import * as S from './styles';

const Header = () => {
  const { user, signOut } = useAuth();
  const { navigate } = useNavigation()

  const navigateToProfile = useCallback(() => {
    navigate('Profile')
  }, [])

  return (
    <S.Container>
      <S.HeaderTitle>
        Bem vindo, {'\n'}
        <S.UserName>{user.name}</S.UserName>
      </S.HeaderTitle>
      <Link onPress={navigateToProfile}>
        <S.Avatar source={{ uri: user.avatar_url }} />
      </Link>
    </S.Container>
  );
};

export default Header;
