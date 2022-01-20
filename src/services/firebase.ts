import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: 'AIzaSyBI00giQwURaVWmnsi8oIy6SbFGm8Rg7yE',
  authDomain: 'prisma-focus.firebaseapp.com',
  databaseURL: 'https://prisma-focus-default-rtdb.firebaseio.com',
  projectId: 'prisma-focus',
  storageBucket: 'prisma-focus.appspot.com',
  messagingSenderId: '438227594951',
  appId: '1:438227594951:web:7682297fcf06b76338d8e2'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }
