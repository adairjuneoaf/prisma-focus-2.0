import React, { useContext } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Content } from '../styles/components/ChallengesCompletedUser'

const ChallengesCompletedUser: React.FC = () => {
  const { ChallengesCompletedUser } = useContext(ChallengesContext)

  return (
    <Content>
      <h4>Desafios completados</h4>
      <h4>{ChallengesCompletedUser}</h4>
    </Content>
  )
}

export default ChallengesCompletedUser
