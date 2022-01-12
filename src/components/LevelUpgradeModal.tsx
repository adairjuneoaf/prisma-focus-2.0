import React, { useContext } from 'react'

import Modal from 'react-modal'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Content } from '../styles/components/LevelUpgradeModal'

const LevelUpgradeModal: React.FC = () => {
  const { LevelCurrent, CloseLevelUpModal, OpenOrCloseLevelUpModal } =
    useContext(ChallengesContext)

  return (
    <Modal
      isOpen={OpenOrCloseLevelUpModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={CloseLevelUpModal}
      >
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
      </button>

      <Content>
        <div className="levelUploaded">
          <h2>{LevelCurrent}</h2>
        </div>
        <div className="congratulationsLevelUploaded">
          <h3>Parabéns</h3>
          <p>Você alcançou um novo level.</p>
        </div>
      </Content>

      <button className="shareTwitterButton">
        Compartilhar no Twitter
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
            fill="#2AA9E0"
          />
        </svg>
      </button>
    </Modal>
  )
}

export default LevelUpgradeModal
