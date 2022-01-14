import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { AuthenticationContext } from '../contexts/AuthenticationContext'

import { Content } from '../styles/components/Login'

const Login: React.FC = () => {
  const [UsernameLength, setUsernameLength] = useState('')

  const router = useRouter()

  const { UserConected, singInWithGoogleAccount } = useContext(
    AuthenticationContext
  )

  async function handleCreateNewUserOrLoginUserExists() {
    if (!UserConected) {
      await singInWithGoogleAccount()
    }

    if (UserConected) {
      router.push(`/challenges/${UserConected?.id}`)
    }
  }

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
