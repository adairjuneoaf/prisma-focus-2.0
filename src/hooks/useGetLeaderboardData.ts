import { database } from '../services/firebase'

type DataOfDatabaseTypes = {
  LevelUser: number
  ExperienceUser: number
  TotalExperienceUser: number
  ChallengesCompleted: number
  name: string
  avatar: string
}

export function useGetLeaderboardData() {
  const databaseRef = database.ref('users')

  var arrayObjects: Array<DataOfDatabaseTypes> = new Array()

  databaseRef.orderByChild('TotalExperienceUser').on('value', user => {
    user.forEach(children => {
      var childrenData = children.val()

      arrayObjects.push(childrenData)
    })
  })

  return { arrayObjects }
}
