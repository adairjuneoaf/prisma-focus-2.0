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
import { useRouter } from 'next/router'

interface ChallengesContextProvider {
  children: ReactNode
}

interface Challenge {
  type: 'body' | 'eye'
  amount: number
  description: string
}

interface UserDatabaseType {
  LevelUser: number
  ExperienceUser: number
  ChallengesCompleted: number
  TotalExperienceUser: number
}

interface ChallengesContextProviderProps {
  LevelCurrent: number
  ChallengesUpUser: () => void
  ExperienceCurrent: number
  CloseLevelUpModal: () => void
  selectNewChallenge: () => void
  ResetChallengeFailed: () => void
  OpenOrCloseLevelUpModal: boolean
  ChallengesCompletedUser: number
  ChallengeSelectedForUser: Challenge
  CalcExperienceToNextLevel: number
  loadingInitialData: (UserID: string) => void
  ExperienceCurrentUpAndLevelUserUp: () => void
}

export const ChallengesContext = createContext(
  {} as ChallengesContextProviderProps
)

const ChallengesContextProvider: React.FC<ChallengesContextProvider> = ({
  children
}) => {
  const { UserConected } = useContext(AuthenticationContext)

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

  async function loadingInitialData(UserID: string) {
    const UserDatabaseRef = database.ref(`users/${UserID}`)

    useEffect(() => {
      UserDatabaseRef.once('value', databasePrismaFocus => {
        const data: UserDatabaseType = databasePrismaFocus.val()

        setLevelCurrent(data?.LevelUser)
        setExperienceCurrent(data?.ExperienceUser)
        setChallengesCompletedUser(data?.ChallengesCompleted)
      })

      return () => {
        UserDatabaseRef.off('value')
      }
    }, [])
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
