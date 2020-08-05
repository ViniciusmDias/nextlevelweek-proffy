import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import { Item, BodyHeader, About, Footer } from './styles'

const TeacherItem: React.FC = () => {
  return (
    <Item>
      <BodyHeader>
        <img src="https://avatars0.githubusercontent.com/u/23238171?s=460&u=d0e086b20c201327cd83ccdaa0ead5c91203f6a0&v=4" alt="Vinicius Dias" />
        <div>
          <strong>Vinicius Dias</strong>
          <span>Front-End</span>
        </div>
      </BodyHeader>
      <About>
        I'm Vinicius Dias, I'm a Frontend developer who is passionate about JavaScript technologies and its entire ecosystem.
            <br /><br />
            I’m currently working on JavaScript, React and Gatsby apps/websites
          </About>
      <Footer>
        <p>
          Preço/hora
              <strong>R$ 42,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </Footer>
    </Item>
  )
}

export default TeacherItem
