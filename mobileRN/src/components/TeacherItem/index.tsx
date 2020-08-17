import React from 'react'
import { Image } from 'react-native'
import { Container, Profile, Avatar, ProfileInformations, Name, Subject, Description, Footer, Price, Value, FavoriteButton, ContactButton, ButtonText, UnfavoriteIcon } from './styles'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'
import { ButtonsContainer } from '../../pages/Landing/styles'

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: 'https://github.com/viniciusmdias.png' }}
        />
        <ProfileInformations>
          <Name>Vinicius Dias</Name>
          <Subject>Matemática</Subject>
        </ProfileInformations>
      </Profile>
      <Description>
        I'm Vinicius Dias, I'm a Frontend developer man_technologist who is passionate about JavaScript technologies and its entire ecosystem.
      </Description>
      <Footer>
        <Price>
          Preço/hora {'   '}
          <Value>R$ 20,00</Value>
        </Price>
        <ButtonsContainer>
          <FavoriteButton>
            {/*<Image source={heartOutlineIcon} />*/}
            <UnfavoriteIcon source={unfavoriteIcon} />
          </FavoriteButton>
          <ContactButton>
            <Image source={whatsappIcon} />
            <ButtonText>Entrar em contato</ButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  )
}

export default TeacherItem;

