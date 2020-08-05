import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import { Container, Form, Input, PageBody } from './styles'

const TeacherList: React.FC = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <Form>
          <Input>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </Input>
          <Input>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </Input>
          <Input>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </Input>
        </Form>
      </PageHeader>

      <PageBody>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </PageBody>
    </Container>
  )
}

export default TeacherList
