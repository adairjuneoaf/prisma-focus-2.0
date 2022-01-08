import React from 'react'

import { Content } from '../styles/components/MenuSideBar'

const MenuSideBar: React.FC = () => {
  return (
    <Content>
      <img src="/svg/icon.svg" alt="Icone do app prisma.focus." />

      <div className="buttonsMenu">
        <a href="/challenges" title="Ir a página de desafios.">
          <img
            src="/svg/home.svg"
            alt="Icone para voltar a pagina Home do app prisma.focus"
          />
        </a>
        <a href="/challenges" title="Ir a página de ranking dos usuários.">
          <img
            src="/svg/award.svg"
            alt="Icone para exibir o ranking de pessoas do app prisma.focus"
          />
        </a>
      </div>
    </Content>
  )
}

export default MenuSideBar
