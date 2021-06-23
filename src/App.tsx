import { createContext, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth, firebase } from './services/firebase';

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => void
}

export const AuthContext = createContext({} as AuthContextType) //passando o formato que sera a informação

function App() {
  const [user, setUser] = useState<User>()

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider() //autenticação com o google

    auth.signInWithPopup(provider).then(result => {//quando o usuario fazz o login
      if (result.user) { //se a autenticação deu certo
        const { displayName, photoURL, uid } = result.user //busca os dados

        //se nao tiver foto e nome vai dar erro
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account.')
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      }
    }) 
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        {/* exact para não pegar as outras rotas que tenha / */}
        <Route path='/' exact component={Home} /> 
        <Route path='/rooms/new' component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default App;
