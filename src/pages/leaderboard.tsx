import React from 'react'
import Head from 'next/head'

import { AnimatePresence, motion } from 'framer-motion'

import MenuSideBar from '../components/MenuSideBar'

import { Container, Content } from '../styles/pages/Leaderboard'
import { database } from '../services/firebase'

type DataOfDatabaseTypes = {
  LevelUser: number
  ExperienceUser: number
  TotalExperienceUser: number
  ChallengesCompleted: number
  name: string
  avatar: string
}

type LeaderboardProps = {
  arrayObjects: Array<DataOfDatabaseTypes>
}

const Leaderboard: React.FC<LeaderboardProps> = ({ arrayObjects }) => {
  return (
    <Container>
      <Head>
        <title>Leaderboard | prisma.focus</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <MenuSideBar />

      <AnimatePresence>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Content>
            <div className="leaderboardUsers">
              <h1>Leaderboard</h1>
              <table>
                <thead>
                  <tr className="titleTableLeaderboard">
                    <th id="titlePositionUser">POSIÇÃO</th>
                    <th id="titleProfileUser">USUÁRIO</th>
                    <th id="titleChallengesUser">DESAFIOS</th>
                    <th id="titleExperienceUser">EXPERIÊNCIA</th>
                  </tr>
                </thead>
                <tbody>
                  {arrayObjects.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td id="userId">{index + 1}</td>
                        <td id="userProfile">
                          <div className="profileData">
                            <img
                              src={data.avatar}
                              alt={`Imagem de perfil de ${data.name}.`}
                            />

                            <div className="infosProfile">
                              <h2>{data.name}</h2>

                              <span className="levelUser">
                                <img
                                  src="/svg/up_level.svg"
                                  alt="Icone que indica o level do usuário na plataforma."
                                />
                                <p>Level {data.LevelUser}</p>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td id="userChallengesCompleted">
                          <span className="highlightInfo">
                            {data.ChallengesCompleted}
                          </span>{' '}
                          completados
                        </td>
                        <td id="userExperience">
                          <span className="highlightInfo">
                            {data.TotalExperienceUser}
                          </span>{' '}
                          xp
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Content>
        </motion.div>
      </AnimatePresence>
    </Container>
  )
}

export async function getStaticProps() {
  const databaseRef = database.ref('users')

  var arrayObjects: Array<DataOfDatabaseTypes> = new Array()

  databaseRef.orderByValue().on('value', user => {
    user.forEach(children => {
      var childrenData = children.val()

      arrayObjects.push(childrenData)
    })
  })

  console.log(arrayObjects)

  return {
    props: {
      arrayObjects
    },
    revalidate: 5
  }
}

export default Leaderboard
