import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { Feather } from "@expo/vector-icons";

import { Container, Teachers, SearchForm, Label, Input, InputGroup, InputBlock, SubmitButton, SubmitButtonText } from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
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
            <Input placeholderTextColor="#c1bccc" placeholder="Qual a matéria?" />
            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input placeholderTextColor="#c1bccc" placeholder="Qual o dia?" />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input placeholderTextColor="#c1bccc" placeholder="Qual o horário.?" />
              </InputBlock>
            </InputGroup>
            <SubmitButton>
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </Teachers>
    </Container>
  )
}

export default TeacherList
