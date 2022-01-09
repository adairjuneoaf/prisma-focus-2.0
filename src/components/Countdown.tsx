import React, { useEffect, useState } from 'react'

import { Content } from '../styles/components/Countdown'

const Countdown: React.FC = () => {
  const [CurrentProgressCycle, setCurrentProgressCycle] = useState(0)

  useEffect(() => {
    setCurrentProgressCycle(85)
  }, [])

  return (
    <Content>
      <div className="timerCountdown">
        <div className="timer">
          <div className="minutesCountdown">
            <span className="minutesLeft">2</span>
            <span>5</span>
          </div>
          <span>:</span>
          <div className="secondsCountdown">
            <span>0</span>
            <span className="secondsRight">0</span>
          </div>
        </div>

        <button
          type="button"
          className="buttonInitiatedCycle"
          title="Iniciar ciclo do contador."
        >
          Iniciar um ciclo
          <img
            src="/svg/tip_next.svg"
            alt="Icone que representa o botão para dar inicio no ciclo até alcançar um desafio."
          />
        </button>

        <button
          type="button"
          className="buttonAbandonCycle"
          title="Abandonar ciclo do contador."
          style={{ display: 'none' }} // SET DE CSS PARA DESABILITAR O BOTÃO TEMPORARIAMENTE
        >
          Abandonar ciclo
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
              fill="white"
            />
          </svg>
          <div className="progressBarCycle">
            <div
              className="currentProgressBarCycle"
              style={{ width: `${CurrentProgressCycle}%` }}
            ></div>
          </div>
        </button>

        <button
          type="button"
          className="buttonCycleFinished"
          title="Confirme se completou ou falhou o desafio para iniciar um novo ciclo."
          style={{ display: 'none' }} // SET DE CSS PARA DESABILITAR O BOTÃO TEMPORARIAMENTE
          disabled
        >
          Ciclo encerrado
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99984 0.666626C4.39984 0.666626 0.666504 4.39996 0.666504 8.99996C0.666504 13.6 4.39984 17.3333 8.99984 17.3333C13.5998 17.3333 17.3332 13.6 17.3332 8.99996C17.3332 4.39996 13.5998 0.666626 8.99984 0.666626ZM7.33317 13.1666L3.1665 8.99996L4.3415 7.82496L7.33317 10.8083L13.6582 4.48329L14.8332 5.66663L7.33317 13.1666Z"
              fill="#4cd62b"
            />
          </svg>
          <div className="progressBarCycle">
            <div
              className="currentProgressBarCycle"
              style={{ width: `${CurrentProgressCycle}%` }}
            ></div>
          </div>
        </button>
      </div>
    </Content>
  )
}

export default Countdown
