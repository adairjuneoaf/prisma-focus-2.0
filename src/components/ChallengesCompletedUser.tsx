import React, { useContext, useState } from 'react'

import { AuthenticationContext } from '../contexts/AuthenticationContext'

import { useGetDataUser } from '../hooks/useGetDataUser'

import { Content } from '../styles/components/ChallengesCompletedUser'

const ChallengesCompletedUser: React.FC = () => {
  const { UserConected } = useContext(AuthenticationContext)

  const { dataOfDatabase } = useGetDataUser(String(UserConected?.id))

  return (
    <Content>
      <h4>Desafios completados</h4>
      <h4>{dataOfDatabase.ChallengesCompleted}</h4>
    </Content>
  )
}

export default ChallengesCompletedUser
