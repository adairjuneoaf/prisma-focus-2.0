import React from 'react'

import { Content } from '../styles/components/UserLeaderboard'

type LeaderboardProps = {
  LevelUser: number
  TotalExperienceUser: number
  ChallengesCompleted: number
  name: string
  avatar: string
}

const UserLeaderboard: React.FC<LeaderboardProps> = ({
  name,
  avatar,
  LevelUser,
  ChallengesCompleted,
  TotalExperienceUser
}) => {
  return (
    <Content>
      <td id="userId">1</td>
      <td id="userProfile">
        <div className="profileData">
          <img src={avatar} alt={`Imagem de perfil de ${name}.`} />

          <div className="infosProfile">
            <h2>{name}</h2>

            <span className="levelUser">
              <img
                src="/svg/up_level.svg"
                alt="Icone que indica o level do usuário na plataforma."
              />
              <p>Level {LevelUser}</p>
            </span>
          </div>
        </div>
      </td>
      <td id="userChallengesCompleted">
        <span className="highlightInfo">{ChallengesCompleted}</span> completados
      </td>
      <td id="userExperience">
        <span className="highlightInfo">{TotalExperienceUser}</span> xp
      </td>
    </Content>
  )
}

export default UserLeaderboard
