import { useEffect, useState } from 'react'
import { database } from '../services/firebase'

type FirebaseDatabaseType = Record<
  number,
  {
    LevelUser: number
    ExperienceUser: number
    ChallengesCompleted: number
    TotalExperienceUser: number
  }
>

type UserDatabaseType = {
  LevelUser: number
  ExperienceUser: number
  ChallengesCompleted: number
  TotalExperienceUser: number
}

const useExistUser = (UserID?: string) => {
  const [dataOfDatabase, setDataOfDatabase] = useState<UserDatabaseType>()

  useEffect(() => {
    const UserDatabaseRef = database.ref(`users/${UserID}`)

    UserDatabaseRef.on('value', databasePrismaFocus => {
      const data: UserDatabaseType = databasePrismaFocus.val()

      setDataOfDatabase(data)
    })

    return () => {
      UserDatabaseRef.off('value')
    }
  }, [])

  return { dataOfDatabase }
}

export default useExistUser
