import React, { useEffect, useState } from 'react'

import { Content } from '../styles/components/ProgressExperience'

const ProgressExperience: React.FC = () => {
  const [CurrentExperienceBar, setCurrentExperienceBar] = useState(0)

  useEffect(() => {
    setCurrentExperienceBar(50)
  }, [])

  return (
    <Content>
      <h3 className="currentExperience">0xp</h3>
      <div className="progressBarExperience">
        <span
          className="currentProgressBarExperience"
          style={{ width: `${CurrentExperienceBar}%` }}
        ></span>
      </div>
      <h3 className="targetExperience">600xp</h3>
    </Content>
  )
}

export default ProgressExperience
