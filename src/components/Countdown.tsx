import React from 'react'
import { Content } from '../styles/components/Countdown'

const Countdown: React.FC = () => {
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

        <button type="button" title="Iniciar ciclo do contador.">
          Iniciar um ciclo
          <img
            src="/svg/tip_next.svg"
            alt="Icone que representa o botão para dar inicio no ciclo até alcançar um desafio."
          />
        </button>
      </div>
    </Content>
  )
}

export default Countdown
