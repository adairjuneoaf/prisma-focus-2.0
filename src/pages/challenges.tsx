import React from 'react'
import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'

import Profile from '../components/Profile'
import Countdown from '../components/Countdown'
import MenuSideBar from '../components/MenuSideBar'
import ChallengesBox from '../components/ChallengesBox'
import LevelUpgradeModal from '../components/LevelUpgradeModal'
import ProgressExperience from '../components/ProgressExperience'
import ChallengesCompletedUser from '../components/ChallengesCompletedUser'

import { Container, Content } from '../styles/pages/Challenges'

const Challenges: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Desafios | prisma.focus</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <LevelUpgradeModal />
      <MenuSideBar />

      <AnimatePresence>
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Content>
            <ProgressExperience />

            <div className="profileCountdownAndChallenges">
              <div className="profileAndCountDown">
                <Profile />
                <ChallengesCompletedUser />
                <Countdown />
              </div>

              <div className="challengesBox">
                <ChallengesBox />
              </div>
            </div>
          </Content>
        </motion.div>
      </AnimatePresence>
    </Container>
  )
}

export default Challenges
