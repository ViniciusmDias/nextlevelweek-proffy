import React, { useState } from 'react'
import { Image, Linking } from 'react-native'
import { ButtonsContainer } from '../../pages/Landing/styles'
import AsyncStorage from '@react-native-community/async-storage'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import { Container, Profile, Avatar, ProfileInformations, Name, Subject, Description, Footer, Price, Value, FavoriteButton, ContactButton, ButtonText, UnFavoriteButton } from './styles'
import api from '../../services/api'

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}
interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function handleLinkToWhatsapp() {
    api.post('connections', {
      user_id: teacher.id,
    })

    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      })
      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <Container>
      <Profile>
        <Avatar
          source={{ uri: teacher.avatar }}
        />
        <ProfileInformations>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInformations>
      </Profile>
      <Description>
        {teacher.bio}
      </Description>
      <Footer>
        <Price>
          Preço/hora {'   '}
          <Value>R$ {teacher.cost}</Value>
        </Price>
        <ButtonsContainer>
          {isFavorited
            ? <UnFavoriteButton onPress={handleToggleFavorite}>
              <Image source={unfavoriteIcon} />
            </UnFavoriteButton>
            : <FavoriteButton onPress={handleToggleFavorite}>
              <Image source={heartOutlineIcon} />
            </FavoriteButton>
          }
          <ContactButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ButtonText>Entrar em contato</ButtonText>
          </ContactButton>
        </ButtonsContainer>
      </Footer>
    </Container >
  )
}

export default TeacherItem;

