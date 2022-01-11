import React, { useContext } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { CountdownContext } from '../contexts/CountdownContext'

import { Content } from '../styles/components/ChallengesBox'
import { ChallengesContext } from '../contexts/ChallengesContext'

const ChallengesBox: React.FC = () => {
  const { ActiveCountdown, HasFinishedCountdown, ResetCountdown } =
    useContext(CountdownContext)

  const {
    ChallengesUpUser,
    ResetChallengeFailed,
    ChallengeSelectedForUser,
    ExperienceCurrentUpAndLevelUserUp
  } = useContext(ChallengesContext)

  function SuccessCompletedChallenge() {
    ExperienceCurrentUpAndLevelUserUp()
    ResetCountdown()
    ChallengesUpUser()
  }

  function FailedCompletedChallenge() {
    ResetCountdown()
    ResetChallengeFailed()
  }

  return (
    <Content>
      <AnimatePresence>
        {ActiveCountdown === false && HasFinishedCountdown === false ? (
          <motion.div
            style={{ width: '100%' }}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="defaultChallengeBox">
              <h2>Inicie um ciclo para receber desafios</h2>

              <div className="challengesInfo">
                <img
                  src="/svg/up_challenge.svg"
                  alt="Icone que indica o aumento de level ao completar desafios."
                />
                <p>Avance de level completando os desafios.</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <AnimatePresence>
            {ActiveCountdown === true && HasFinishedCountdown === false ? (
              <motion.div
                style={{ width: '100%' }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="initiatedCycleChallenge">
                  <h2>
                    Finalize o ciclo de foco, para ter um novo desafio a cumprir
                  </h2>

                  <div className="challengesInfo">
                    <img
                      src="/svg/up_challenge.svg"
                      alt="Icone que indica o aumento de level ao completar desafios."
                    />
                    <p>
                      Complete o desafio ao final do ciclo, ganhe experiência e
                      suba de level.
                    </p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence>
                <motion.div
                  style={{ width: '100%', height: '100%' }}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="currentChallenge" style={{}}>
                    <h2>Ganhe {ChallengeSelectedForUser.amount}xp</h2>
                    <span className="divider"></span>

                    <div className="challengesInfo">
                      <img
                        src={`${
                          ChallengeSelectedForUser.type === 'body'
                            ? '/svg/body_exercise.svg'
                            : '/svg/eye_exercise.svg'
                        }`}
                        alt="Icone que indica o tipo de desafio a ser completado."
                      />
                      <h2>Exercite-se</h2>
                      <p>
                        É agora USER.NAME, vamos lá!
                        <br />
                        {ChallengeSelectedForUser.description}
                      </p>
                    </div>
                  </div>

                  <div className="buttonsChallenge">
                    <button
                      type="button"
                      className="typeFailed"
                      title="Falhei no desafio proposto."
                      onClick={FailedCompletedChallenge}
                    >
                      Falhei
                    </button>
                    <button
                      type="button"
                      className="typeSuccess"
                      title="Finalizei no desafio proposto."
                      onClick={SuccessCompletedChallenge}
                    >
                      Completei
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </AnimatePresence>
        )}
      </AnimatePresence>
    </Content>
  )
}

export default ChallengesBox
