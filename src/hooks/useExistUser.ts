import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { database } from '../services/firebase'

type UserDatabaseType = {
  LevelUser: number
  ExperienceUser: number
  ChallengesCompleted: number
  TotalExperienceUser: number
}

const useExistUser = () => {
  const [dataOfDatabase, setDataOfDatabase] = useState<UserDatabaseType>()

  const router = useRouter()

  const { username } = router.query

  useEffect(() => {
    const UserDatabaseRef = database.ref(`users/${String(username)}`)

    UserDatabaseRef.once('value', databasePrismaFocus => {
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
