import React, { useEffect, useState } from 'react'
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from '../../services/api';

import { Container, Banner, Title, TitleBold, ButtonsContainer, ButtonPrimary, ButtonSecondary, ButtonText, TotalConnections } from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  })


  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses')
  }

  function handleNavigateToStudyPages() {
    navigate('Study')
  }

  return (
    <Container >
      <Banner resizeMode="contain" source={landingImg} />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>
        <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>
      <TotalConnections>
        Total de {totalConnections} conexões já realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>

  )

}

export default Landing;
