import React from 'react'

import { Content } from '../styles/components/ProgressExperience'

const ProgressExperience: React.FC = () => {
  return (
    <Content>
      <h3 className="currentExperience">0xp</h3>
      <div className="progressBarExperience">
        <span className="currentProgressBarExperience"></span>
      </div>
      <h3 className="targetExperience">600xp</h3>
    </Content>
  )
}

export default ProgressExperience
