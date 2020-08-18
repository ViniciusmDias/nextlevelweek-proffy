import React, { ReactNode } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png'
import logoImage from "../../assets/images/logo.png"
import { Container, TopBar, Title, Header } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }
  return (
    <Container>
      <TopBar>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImage} resizeMode="contain" />
      </TopBar>
      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>
      {children}
    </Container>
  )
}

export default PageHeader
