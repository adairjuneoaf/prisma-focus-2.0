import router from 'next/router'

import { toast } from 'react-toastify'
import { database } from '../services/firebase'

export function useCreateDataUser(
  UserID: string,
  UserName: string,
  UserAvatar: string
) {
  try {
    database.ref(`users/${UserID}`).set({
      LevelUser: 1,
      ExperienceUser: 0,
      TotalExperienceUser: 0,
      ChallengesCompleted: 0,
      name: UserName,
      avatar: UserAvatar
    })

    toast.success('Cadastro de novo usuário efetuado com sucesso!')
    router.push(`/challenges/${UserID}`)
  } catch {
    toast.error('Opps... houve algum erro durante a criação do seu usuário.')
  }
}
