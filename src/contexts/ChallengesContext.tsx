import React, { createContext, ReactNode, useState } from 'react'

import ChallengesJSON from '../../challenges.json'

interface ChallengesContextProvider {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye'
  description: string
  amount: number
}

interface ChallengesContextProviderProps {
  ChallengeSelectedForUser: Challenge
  selectNewChallenge: () => void
  LevelCurrent: number
  ExperienceCurrent: number
  CalcExperienceToNextLevel: number
  OpenOrCloseLevelUpModal: boolean
  CloseLevelUpModal: () => void
  ExperienceCurrentUpAndLevelUserUp: () => void
  ResetChallengeFailed: () => void
  ChallengesCompletedUser: number
  ChallengesUpUser: () => void
}

export const ChallengesContext = createContext(
  {} as ChallengesContextProviderProps
)

const ChallengesContextProvider: React.FC<ChallengesContextProvider> = ({
  children
}) => {
  const [ChallengeSelectedForUser, setChallengeSelectedForUser] =
    useState<any>(null)

  const [LevelCurrent, setLevelCurrent] = useState(1)
  const [ExperienceCurrent, setExperienceCurrent] = useState(0)
  const [OpenOrCloseLevelUpModal, setOpenOrCloseLevelUpModal] = useState(false)
  const [ChallengesCompletedUser, setChallengesCompletedUser] = useState(0)

  const CalcExperienceToNextLevel = Math.pow((LevelCurrent + 1) * 5, 2)

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

  function LevelUpUser() {
    setLevelCurrent(LevelCurrent + 1)
    setOpenOrCloseLevelUpModal(true)
  }

  function ChallengesUpUser() {
    setChallengesCompletedUser(ChallengesCompletedUser + 1)
  }

  function ExperienceCurrentUpAndLevelUserUp() {
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
  }

  function ResetChallengeFailed() {
    setChallengeSelectedForUser(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        ChallengeSelectedForUser,
        selectNewChallenge,
        LevelCurrent,
        ExperienceCurrent,
        CalcExperienceToNextLevel,
        OpenOrCloseLevelUpModal,
        CloseLevelUpModal,
        ExperienceCurrentUpAndLevelUserUp,
        ResetChallengeFailed,
        ChallengesCompletedUser,
        ChallengesUpUser
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}

export default ChallengesContextProvider
