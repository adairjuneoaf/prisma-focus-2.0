import React, { useContext, useEffect, useState } from 'react'

import { ChallengesContext } from '../contexts/ChallengesContext'

import { Content } from '../styles/components/ProgressExperience'

const ProgressExperience: React.FC = () => {
  const { ExperienceCurrent, CalcExperienceToNextLevel } =
    useContext(ChallengesContext)

  const [CurrentExperienceBar, setCurrentExperienceBar] = useState(0)

  useEffect(() => {
    setCurrentExperienceBar(
      (ExperienceCurrent * 100) / CalcExperienceToNextLevel
    )
  }, [ExperienceCurrent])

  return (
    <Content>
      <h3 className="currentExperience">{ExperienceCurrent}xp</h3>
      <div className="progressBarExperience">
        <span
          className="currentProgressBarExperience"
          style={{ width: `${CurrentExperienceBar}%` }}
        ></span>
      </div>
      <h3 className="targetExperience">{CalcExperienceToNextLevel}xp</h3>
    </Content>
  )
}

export default ProgressExperience
