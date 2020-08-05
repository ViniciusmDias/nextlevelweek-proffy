import React from 'react'
import { Link } from "react-router-dom";

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import { Header, TopBar, HeaderContent } from './styles'

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <Header>
      <TopBar>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </TopBar>
      <HeaderContent>
        <strong>{props.title}</strong>
        {props.children}
      </HeaderContent>
    </Header>
  )
}

export default PageHeader
