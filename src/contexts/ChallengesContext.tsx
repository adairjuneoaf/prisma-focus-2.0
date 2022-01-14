import React, { createContext, ReactNode, useContext, useState } from 'react'

import ChallengesJSON from '../../challenges.json'

import { AuthenticationContext } from './AuthenticationContext'

import { database } from '../services/firebase'
import { useExistUser } from '../hooks/useExistUser'

interface ChallengesContextProvider {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye'
  amount: number
  description: string
}

interface UseUsersTypes {
  ChallengesCompleted: string
  ExperienceUser: number
  LevelUser: number
  TotalExperienceUser: number
  Username: string
}

interface ChallengesContextProviderProps {
  LevelCurrent: number
  ChallengesUpUser: () => void
  ExperienceCurrent: number
  CloseLevelUpModal: () => void
  selectNewChallenge: () => void
  loadingInitialData: () => void
  ResetChallengeFailed: () => void
  OpenOrCloseLevelUpModal: boolean
  ChallengesCompletedUser: number
  ChallengeSelectedForUser: Challenge
  CalcExperienceToNextLevel: number
  ExperienceCurrentUpAndLevelUserUp: () => void
}

export const ChallengesContext = createContext(
  {} as ChallengesContextProviderProps
)

const ChallengesContextProvider: React.FC<ChallengesContextProvider> = ({
  children
}) => {
  const { UserConected } = useContext(AuthenticationContext)
  const { dataOfUsersOfDatabase } = useExistUser(UserConected?.id)

  const [ChallengeSelectedForUser, setChallengeSelectedForUser] =
    useState<any>(null)

  const [LevelCurrent, setLevelCurrent] = useState(1)
  const [ExperienceCurrent, setExperienceCurrent] = useState(0)
  const [OpenOrCloseLevelUpModal, setOpenOrCloseLevelUpModal] = useState(false)
  const [ChallengesCompletedUser, setChallengesCompletedUser] = useState(0)

  const CalcExperienceToNextLevel = Math.pow((LevelCurrent + 1) * 5, 2)

  function loadingInitialData() {
    setLevelCurrent(dataOfUsersOfDatabase.LevelUser)
    setExperienceCurrent(dataOfUsersOfDatabase.ExperienceUser)
    setChallengesCompletedUser(dataOfUsersOfDatabase.ChallengesCompleted)
  }

  function selectNewChallenge() {
    const RadomChallengeIndex = Math.floor(
      Math.random() * ChallengesJSON.length
    )
    const ChallengeSelected = ChallengesJSON[RadomChallengeIndex]
    setChallengeSelectedForUser(ChallengeSelected)
  }

  function CloseLevelUpModal() {
    setOpenOrCloseLevelUpModal(false)
  }

  async function LevelUpUser() {
    setLevelCurrent(prev => prev + 1)
    setOpenOrCloseLevelUpModal(true)

    await database.ref(`users/${UserConected?.id}`).update({
      LevelUser: LevelCurrent + 1
    })
  }

  async function ChallengesUpUser() {
    setChallengesCompletedUser(prev => prev + 1)

    await database.ref(`users/${UserConected?.id}`).update({
      ChallengesCompleted: ChallengesCompletedUser + 1
    })
  }

  async function ExperienceCurrentUpAndLevelUserUp() {
    if (!ChallengesJSON) {
      return 0
    }

    const { amount } = ChallengeSelectedForUser

    let ExperienceFinal = ExperienceCurrent + amount

    if (ExperienceFinal >= CalcExperienceToNextLevel) {
      ExperienceFinal = ExperienceFinal - CalcExperienceToNextLevel
      LevelUpUser()
    }

    setExperienceCurrent(ExperienceFinal)
    setChallengeSelectedForUser(null)

    await database.ref(`users/${UserConected?.id}`).update({
      ExperienceUser: ExperienceFinal
    })
  }

  function ResetChallengeFailed() {
    setChallengeSelectedForUser(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        LevelCurrent,
        ChallengesUpUser,
        CloseLevelUpModal,
        ExperienceCurrent,
        selectNewChallenge,
        loadingInitialData,
        ResetChallengeFailed,
        ChallengesCompletedUser,
        OpenOrCloseLevelUpModal,
        ChallengeSelectedForUser,
        CalcExperienceToNextLevel,
        ExperienceCurrentUpAndLevelUserUp
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export default ChallengesContextProvider
