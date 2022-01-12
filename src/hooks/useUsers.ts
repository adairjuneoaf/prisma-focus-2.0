import { useState, useEffect, useContext } from 'react'

import { database } from '../services/firebase'

import { AuthenticationContext } from '../contexts/AuthenticationContext'

type DatabaseUsersType = {
  ChallengesCompleted: string
  ExperienceUser: number
  LevelUser: number
  TotalExperienceUser: number
  Username: string
}

export function useUsers() {
  const { UserConected } = useContext(AuthenticationContext)

  const [UserDataOfDatabase, setUserDataOfDatabase] =
    useState<DatabaseUsersType>()

  useEffect(() => {
    const UserDatabaseRef = database.ref(`users/${UserConected?.id}`)

    UserDatabaseRef.on('value', snapshot => {
      const data = snapshot.val()

      setUserDataOfDatabase(data)
    })
    return () => {
      UserDatabaseRef.off('value')
    }
  }, [])

  // async function CreateNewUser() {
  //   await database.ref(`users/${UserConected?.id}`).set({
  //     LevelUser: 1,
  //     ExperienceUser: 0,
  //     TotalExperienceUser: 0,
  //     ChallengesCompleted: 0
  //   })
  // }

  return { UserDataOfDatabase }
}
