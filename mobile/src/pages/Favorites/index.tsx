import React, { useState } from 'react';
import { Container, Teachers } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'


const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {

        setFavorites(JSON.parse(response));
      }
    })
  }
  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />
      <Teachers
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
      </Teachers>
    </Container>
  )
}

export default Favorites
