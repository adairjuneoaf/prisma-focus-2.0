import React from 'react'
import Countdown from '../components/Countdown'

import MenuSideBar from '../components/MenuSideBar'
import Profile from '../components/Profile'
import ProgressExperience from '../components/ProgressExperience'

import { Container, Content } from '../styles/pages/Challenges'

const Challenges: React.FC = () => {
  return (
    <Container>
      <MenuSideBar />
      <Content>
        <ProgressExperience />

        <div className="profileCountdownAndChallenges">
          <div className="profileAndCountDown">
            <Profile />
            <Countdown />
          </div>

          <div className="challengesBox">
            <h1>Challenges</h1>
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Challenges
