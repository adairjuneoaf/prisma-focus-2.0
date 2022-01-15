import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import ChallengesJSON from '../../challenges.json'

import { AuthenticationContext } from './AuthenticationContext'

import { database } from '../services/firebase'
import { useGetDataUser } from '../hooks/useGetDataUser'
interface ChallengesContextProvider {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye'
  amount: number
  description: string
}
interface ChallengesContextProviderProps {
  ChallengesUpUser: () => void
  CloseLevelUpModal: () => void
  selectNewChallenge: () => void
  ResetChallengeFailed: () => void
  OpenOrCloseLevelUpModal: boolean
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

  const { dataOfDatabase } = useGetDataUser(String(UserConected?.id))

  const [ChallengeSelectedForUser, setChallengeSelectedForUser] =
    useState<any>(null)

  const [OpenOrCloseLevelUpModal, setOpenOrCloseLevelUpModal] = useState(false)

  const CalcExperienceToNextLevel = Math.pow(
    (dataOfDatabase?.LevelUser + 1) * 5,
    2
  )

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
    setOpenOrCloseLevelUpModal(true)

    await database.ref(`users/${UserConected?.id}`).update({
      LevelUser: dataOfDatabase.LevelUser + 1
    })
  }

  async function ChallengesUpUser() {
    await database.ref(`users/${UserConected?.id}`).update({
      ChallengesCompleted: dataOfDatabase.ChallengesCompleted + 1
    })
  }

  async function ExperienceCurrentUpAndLevelUserUp() {
    if (!ChallengesJSON) {
      return 0
    }

    const { amount } = ChallengeSelectedForUser

    let ExperienceFinal = dataOfDatabase.ExperienceUser + amount

    if (ExperienceFinal >= CalcExperienceToNextLevel) {
      ExperienceFinal = ExperienceFinal - CalcExperienceToNextLevel
      LevelUpUser()
    }

    setChallengeSelectedForUser(null)

    await database.ref(`users/${UserConected?.id}`).update({
      ExperienceUser: ExperienceFinal,
      TotalExperienceUser: dataOfDatabase.TotalExperienceUser + amount
    })
  }

  function ResetChallengeFailed() {
    setChallengeSelectedForUser(null)
  }

  return (
    <ChallengesContext.Provider
      value={{
        ChallengesUpUser,
        CloseLevelUpModal,
        selectNewChallenge,
        ResetChallengeFailed,
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
