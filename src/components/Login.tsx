import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { AuthenticationContext } from '../contexts/AuthenticationContext'

import { Content } from '../styles/components/Login'
import { database } from '../services/firebase'
import { toast } from 'react-toastify'

const Login: React.FC = () => {
  const [UsernameLength, setUsernameLength] = useState('')

  const router = useRouter()

  const { UserConected, singInWithGoogleAccount } = useContext(
    AuthenticationContext
  )

  let UserConectedExist: Boolean
  const UserDatabaseRef = database.ref(`users`)

  async function handleCreateNewUserOrLoginUserExists() {
    if (!UserConected) {
      await singInWithGoogleAccount()
      //router.push('/challenges')
      toast.success('Cadastro efetuado com sucesso!')
    }

    UserDatabaseRef.on('value', snapshot => {
      snapshot.forEach(data => {
        console.log(data.key)
        console.log(UserConected?.id)
        if (UserConected?.id === data.key) {
          UserConectedExist = true
        } else UserConectedExist = false
      })
    })

    if (!UserConectedExist) {
      toast.error(
        'Este usuário com ID: ' +
          UserConected?.id +
          ' não existe em nossa base de dados.'
      )
    }

    if (UserConectedExist) {
      toast.success('Login efetuado com sucesso!')
      router.push('/challenges')
    }

    if (UserConected && UserConectedExist) {
      console.log(
        'Usuário de id ' +
          UserConected?.id +
          ' e nome ' +
          UserConected?.name +
          ' já pode ser criado.'
      )

      router.push('/challenges')
    }
  }

  //   const UserDatabaseRef = database.ref(`users`)

  //   UserDatabaseRef.on('value', snapshot => {
  //     snapshot.forEach(data => {
  //       if (UserConected?.id === data.key) {
  //         router.push('/challenges')
  //       } else {
  //         RegisterUser()
  //       }
  //     })
  //   })

  //   return
  // }

  return (
    <Content>
      <h2>Bem-vindo</h2>

      <div className="loginAccounts">
        <button type="button">
          <img
            src="/svg/google.svg"
            alt="Icone de login go Google."
            title="Efetuar login com o Google."
            onClick={handleCreateNewUserOrLoginUserExists}
          />
        </button>
        <p>
          Faça login com seu Username ou conta do Google caso seja novo por
          aqui.
        </p>
      </div>

      <div className="loginUsername">
        <input
          id="inputUsername"
          type="text"
          placeholder="Digite o seu username"
          onChange={event => setUsernameLength(event.target.value)}
        />
        <button
          type="button"
          className={`${UsernameLength.length > 0 ? 'inputOnValue' : ''}`}
          title="Efetuar login com meu Username"
        >
          <img
            src="/svg/arrow_next.svg"
            alt="Seta indicando botão efetuar login com Username."
          />
        </button>
      </div>
    </Content>
  )
}

export default Login
