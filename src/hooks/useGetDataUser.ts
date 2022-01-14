import { useEffect, useState } from 'react'
import { database } from '../services/firebase'

interface DataOfDatabaseTypes {
  LevelUser: number
  ExperienceUser: number
  TotalExperienceUser: number
  ChallengesCompleted: number
}

export function useGetDataUser(username: string) {
  const [dataOfDatabase, setDataOfDatabase] = useState<DataOfDatabaseTypes>({
    LevelUser: 1,
    ExperienceUser: 0,
    TotalExperienceUser: 0,
    ChallengesCompleted: 0
  })

  useEffect(() => {
    const databaseRef = database.ref(`users/${username}`)

    databaseRef.on('value', user => {
      const dataUser = user.val()

      setDataOfDatabase(dataUser)
    })

    return () => {
      databaseRef.off('value')
    }
  }, [username])

  return { dataOfDatabase }
}
