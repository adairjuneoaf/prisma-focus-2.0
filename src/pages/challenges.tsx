import React from 'react'
import ChallengesBox from '../components/ChallengesBox'

import Countdown from '../components/Countdown'
import LevelUpgradeModal from '../components/LevelUpgradeModal'
import MenuSideBar from '../components/MenuSideBar'
import Profile from '../components/Profile'
import ProgressExperience from '../components/ProgressExperience'

import { Container, Content } from '../styles/pages/Challenges'

const Challenges: React.FC = () => {
  return (
    <Container>
      <LevelUpgradeModal />
      <MenuSideBar />
      <Content>
        <ProgressExperience />

        <div className="profileCountdownAndChallenges">
          <div className="profileAndCountDown">
            <Profile />
            <Countdown />
          </div>

          <div className="challengesBox">
            <ChallengesBox />
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Challenges
