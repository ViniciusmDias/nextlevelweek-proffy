import React from 'react'

import PageHeader from '../../components/PageHeader'

import { Container } from './styles'

const TeacherForm: React.FC = () => {
  return (
    <Container id="page-teacher-list" className="container">
      <PageHeader title="Que incrível que você quer dar aulas." />
    </Container>
  )
}

export default TeacherForm
