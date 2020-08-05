import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import { LandingPage, Container, Logo, HeroImg, Buttons, TotalConnections } from './styles'

const Landing: React.FC = () => {
  return (
    <LandingPage>
      <Container id="page-landing-content" className="container">
        <Logo>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Logo>

        <HeroImg
          src={landingImg}
          alt="Plataforma de estudos"
        />

        <Buttons>
          <a href="" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </a>
        </Buttons>

        <TotalConnections>
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnections>
      </Container>
    </LandingPage>
  )
}

export default Landing