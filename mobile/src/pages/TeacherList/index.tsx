import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Feather } from "@expo/vector-icons";
import api from '../../services/api';
import AsyncStorage from "@react-native-community/async-storage";

import { Container, Teachers, SearchForm, Label, Input, InputGroup, InputBlock, SubmitButton, SubmitButtonText } from './styles';
import { useFocusEffect } from '@react-navigation/native';

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(true);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavorites(favoritedTeachersIds);
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites();
  })

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setIsFiltersVisible(false);
    setTeachers(response.data);
  }


  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input value={subject} onChangeText={text => setSubject(text)} placeholderTextColor="#c1bccc" placeholder="Qual a matéria?" />
            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input value={week_day} onChangeText={text => setWeekDay(text)} placeholderTextColor="#c1bccc" placeholder="Qual o dia?" />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input value={time} onChangeText={text => setTime(text)} placeholderTextColor="#c1bccc" placeholder="Qual o horário?" />
              </InputBlock>
            </InputGroup>
            <SubmitButton onPress={handleFiltersSubmit}>
              <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
          </SearchForm>
        )}
      </PageHeader>
      <Teachers
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) => <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />)}

      </Teachers>
    </Container>
  )
}

export default TeacherList
