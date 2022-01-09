import React from 'react'

import { Content } from '../styles/components/ChallengesBox'

const ChallengesBox: React.FC = () => {
  return (
    <Content>
      <div className="defaultChallengeBox" style={{ display: 'none' }}>
        <h2>Inicie um ciclo para receber desafios</h2>

        <div className="challengesInfo">
          <img
            src="/svg/up_challenge.svg"
            alt="Icone que indica o aumento de level ao completar desafios."
          />
          <p>Avance de level completando os desafios.</p>
        </div>
      </div>

      <div className="initiatedCycleChallenge" style={{ display: 'none' }}>
        <h2>Finalize o ciclo de foco, para ter um novo desafio a cumprir</h2>

        <div className="challengesInfo">
          <img
            src="/svg/up_challenge.svg"
            alt="Icone que indica o aumento de level ao completar desafios."
          />
          <p>
            Complete os desafios ao final do ciclo, ganhe experiência e suba de
            level.
          </p>
        </div>
      </div>

      <div className="currentChallenge" style={{}}>
        <h2>Ganhe 400xp</h2>
        <span className="divider"></span>

        <div className="challengesInfo">
          <img
            src="/svg/body_exercise.svg"
            alt="Icone que indica o tipo de desafio a ser completado."
          />
          <h2>Exercite-se</h2>
          <p>
            É agora USER.NAME, vamos lá!
            <br />
            Caminhe por 3 minutos e estique suas pernas pra você ficar saudável.
          </p>
        </div>
      </div>

      <div className="buttonsChallenge">
        <button
          type="button"
          className="typeFailed"
          title="Falhei no desafio proposto."
        >
          Falhei
        </button>
        <button
          type="button"
          className="typeSuccess"
          title="Finalizei no desafio proposto."
        >
          Completei
        </button>
      </div>
    </Content>
  )
}

export default ChallengesBox
