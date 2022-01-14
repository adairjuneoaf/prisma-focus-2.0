import { useRouter } from 'next/router'
import React, { useContext, useState } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'
import { useGetDataUser } from '../hooks/useGetDataUser'

import { Content } from '../styles/components/ChallengesCompletedUser'

const ChallengesCompletedUser: React.FC = () => {
  const { ChallengesCompletedUser } = useContext(ChallengesContext)

  const router = useRouter()

  const { username } = router.query

  const { dataOfDatabase } = useGetDataUser(String(username))

  return (
    <Content>
      <h4>Desafios completados</h4>
      <h4>{dataOfDatabase.ChallengesCompleted}</h4>
    </Content>
  )
}

export default ChallengesCompletedUser
