import React from 'react'

import { Content } from '../styles/components/Profile'

const Profile: React.FC = () => {
  return (
    <Content>
      <div className="profileUser">
        <img
          src="https://avatars.githubusercontent.com/u/88504998?v=4"
          alt="Imagem de perfil do usuário logado."
        />

        <div className="infosProfile">
          <h2>Adair Juneo</h2>

          <span className="levelUser">
            <img
              src="/svg/up_level.svg"
              alt="Icone que indica o level do usuário na plataforma."
            />
            <p>Level 1</p>
          </span>
        </div>
      </div>
    </Content>
  )
}

export default Profile
