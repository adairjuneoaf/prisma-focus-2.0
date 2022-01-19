import router from 'next/router'
import { useContext } from 'react'

import { toast } from 'react-toastify'
import { AuthenticationContext } from '../contexts/AuthenticationContext'
import { database } from '../services/firebase'

export function useCreateDataUser(UserID: string) {
  const { UserConected } = useContext(AuthenticationContext)

  try {
    database.ref(`users/${UserID}`).set({
      LevelUser: 1,
      ExperienceUser: 0,
      TotalExperienceUser: 0,
      ChallengesCompleted: 0,
      name: UserConected?.name,
      avatar: UserConected?.avatar
    })

    toast.success('Cadastro de novo usuário efetuado com sucesso!')
    router.push(`/challenges/${UserID}`)
  } catch {
    toast.error('Opps... houve algum erro durante a criação do seu usuário.')
  }
}
