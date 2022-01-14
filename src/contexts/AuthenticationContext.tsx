import router from 'next/router'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { toast } from 'react-toastify'

import { auth, firebase } from '../services/firebase'

import { useCreateDataUser } from '../hooks/useCreateDataUser'

import useExistUser from '../hooks/useExistUser'

type AuthenticationContextProviderProps = {
  children: ReactNode
}

type User = {
  id: string
  name: string
  avatar: string
  email: string
}

type AuthenticationContextProps = {
  UserConected: User | undefined
  singInWithGoogleAccount: () => Promise<void>
}

export const AuthenticationContext = createContext(
  {} as AuthenticationContextProps
)

const AuthenticationContextProvider: React.FC<
  AuthenticationContextProviderProps
> = ({ children }) => {
  const [UserConected, setUserConected] = useState<User>()

  useEffect(() => {
    const UnsubscribeUserConnected = auth.onAuthStateChanged(UserConected => {
      if (UserConected) {
        const { uid, email, displayName, photoURL } = UserConected

        if (!displayName || !photoURL || !email) {
          return toast.error(
            'Houve um erro durante o processo de login com essa conta.'
          )
        }

        setUserConected({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email: email
        })
      }
      return () => {
        UnsubscribeUserConnected()
      }
    })
  }, [])

  async function singInWithGoogleAccount() {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider()

    const ResultConnectionGoogleProvider = await auth.signInWithPopup(
      GoogleProvider
    )

    if (ResultConnectionGoogleProvider.user) {
      const { uid, email, displayName, photoURL } =
        ResultConnectionGoogleProvider.user

      if (!displayName || !photoURL || !email) {
        toast.error('Houve um erro durante o processo de login com essa conta.')
        return
      }

      setUserConected({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email
      })

      await firebase
        .database()
        .ref(`users/${uid}`)
        .once('value', snapshot => {
          if (snapshot.exists()) {
            toast.success('Login efetuado com sucesso!')
            return router.push(`/challenges/${uid}`)
          } else return useCreateDataUser(uid)
        })
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        UserConected,
        singInWithGoogleAccount
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider
