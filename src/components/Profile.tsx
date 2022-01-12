import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { useUsers } from '../hooks/useUsers'

import { Content } from '../styles/components/Profile'

const Profile: React.FC = () => {
  const { LevelCurrent } = useContext(ChallengesContext)

  const { UserConected } = useContext(AuthenticationContext)

  return (
    <Content>
      <div className="profileUser">
        <img
          src={UserConected?.avatar}
          alt={`Imagem de perfil de ${UserConected?.name}.`}
        />

        <div className="infosProfile">
          <h2>{UserConected?.name}</h2>

          <span className="levelUser">
            <img
              src="/svg/up_level.svg"
              alt="Icone que indica o level do usuário na plataforma."
            />
            <p>Level {LevelCurrent}</p>
          </span>
        </div>
      </div>
    </Content>
  )
}

export default Profile
