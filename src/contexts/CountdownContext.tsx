import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { ChallengesContext } from './ChallengesContext'

interface CountdownContextProviderProps {
  children: ReactNode
}

interface CountdownContextProps {
  Timer: number
  minutes: number
  seconds: number
  ActiveCountdown: boolean
  handleActiveCountdown: () => void
  HasFinishedCountdown: boolean
  ResetCountdown: () => void
}

let CountdownTimeout: any //VARIAVEL PARA SETAR UM DELAY DE INICIO E PARADA DO COUNTDOWN EM TELA

export const CountdownContext = createContext({} as CountdownContextProps)

const CountdownContextProvider: React.FC<CountdownContextProviderProps> = ({
  children
}) => {
  const [Timer, setTimer] = useState(0.2 * 60)
  const [HasFinishedCountdown, setHasFinishedCountdown] = useState(false)

  const { selectNewChallenge } = useContext(ChallengesContext)

  const minutes = Math.floor(Timer / 60) //ARREDONDANDO O TIMER PARA VALOR INTEIRO
  const seconds = Timer % 60 //OBTENDO O RESTANTE DA DIVISÃO PARA RECEBER OS SEGUNDOS

  const [ActiveCountdown, setActiveCountdown] = useState(false)

  function handleActiveCountdown() {
    setActiveCountdown(true)
  }

  useEffect(() => {
    if (ActiveCountdown && Timer > 0) {
      CountdownTimeout = setTimeout(() => {
        setTimer(Timer - 1)
      }, 1000)
    } else if (ActiveCountdown && Timer === 0) {
      setHasFinishedCountdown(true)
      setActiveCountdown(false)
      selectNewChallenge()
    }
  }, [ActiveCountdown, Timer])

  function ResetCountdown() {
    clearTimeout(CountdownTimeout)
    setHasFinishedCountdown(false)
    setActiveCountdown(false)
    setTimer(0.2 * 60)
  }

  return (
    <CountdownContext.Provider
      value={{
        Timer,
        minutes,
        seconds,
        ActiveCountdown,
        handleActiveCountdown,
        HasFinishedCountdown,
        ResetCountdown
      }}
    >
      {children}
    </CountdownContext.Provider>
  )
}

export default CountdownContextProvider