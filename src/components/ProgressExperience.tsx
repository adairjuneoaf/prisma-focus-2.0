import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { useGetDataUser } from '../hooks/useGetDataUser'

import { Content } from '../styles/components/ProgressExperience'

const ProgressExperience: React.FC = () => {
  const router = useRouter()

  const { username } = router.query

  const { dataOfDatabase } = useGetDataUser(String(username))

  const [CurrentExperienceBar, setCurrentExperienceBar] = useState(0)

  useEffect(() => {
    setCurrentExperienceBar(
      (dataOfDatabase.ExperienceUser * 100) / CalcExperienceToNextLevel
    )
  }, [dataOfDatabase.ExperienceUser])

  const CalcExperienceToNextLevel = Math.pow(
    (dataOfDatabase.LevelUser + 1) * 5,
    2
  )

  return (
    <Content>
      <h3 className="currentExperience">{dataOfDatabase.ExperienceUser}xp</h3>
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
