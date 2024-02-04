import { useState } from 'react'
import Login from '../src/components/Login';
import Profile from '../src/components/Profile';
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React Context Api</h1>
      <Login/>
      <Profile />
    </UserContextProvider>
  )
}

export default App
