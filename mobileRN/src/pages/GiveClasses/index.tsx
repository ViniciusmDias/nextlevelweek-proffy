import React from "react";
import { Container, Background, Title, Description, OkButton, ButtonText } from './styles'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <Container>
      <Background resizeMode="contain" source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Description>
      </Background>
      <OkButton onPress={handleNavigateBack}>
        <ButtonText>Tudo bem</ButtonText>
      </OkButton>
    </Container>
  )
}

export default GiveClasses;
