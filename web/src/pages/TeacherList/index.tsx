import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import { Container, Form, PageBody } from './styles'

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
            ]} />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]} />
          <Input type="time" label="Hora" name="time" />
        </Form>
      </PageHeader>

      <PageBody>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </PageBody>
    </Container >
  )
}

export default TeacherList
