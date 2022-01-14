import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import { AuthenticationContext } from '../contexts/AuthenticationContext'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { useGetDataUser } from '../hooks/useGetDataUser'

import { Content } from '../styles/components/Profile'

const Profile: React.FC = () => {
  const router = useRouter()

  const { username } = router.query

  const { UserConected } = useContext(AuthenticationContext)

  const { dataOfDatabase } = useGetDataUser(String(username))

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
            <p>Level {dataOfDatabase.LevelUser}</p>
          </span>
        </div>
      </div>
    </Content>
  )
}

export default Profile
