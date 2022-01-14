import router from 'next/router'
import { useState, useEffect } from 'react'

import { toast } from 'react-toastify'

import { database } from '../services/firebase'

type DatabaseUsersType = {
  ChallengesCompleted: number
  ExperienceUser: number
  LevelUser: number
  TotalExperienceUser: number
}

export function useExistUser(UserID: string | undefined) {
  const [dataOfUsersOfDatabase, setDataOfUsersOfDatabase] =
    useState<DatabaseUsersType>({
      ChallengesCompleted: 0,
      ExperienceUser: 0,
      LevelUser: 1,
      TotalExperienceUser: 0
    })

  useEffect(() => {
    const UserDatabaseRef = database.ref(`users/${UserID}`)

    UserDatabaseRef.on('value', databasePrismaFocus => {
      const data = databasePrismaFocus.val()

      setDataOfUsersOfDatabase(data)
      console.log(data)
    })

    return () => {
      UserDatabaseRef.off('value')
    }
  }, [])

  return { dataOfUsersOfDatabase }
}
