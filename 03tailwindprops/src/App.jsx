import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="mb-4 bg-green-400 text-black p-4 rounded-xl">
      Hello world!
    </h1>

<Card username="Deepak" btnText='Click me'/>
<Card username='Hello' btnText='Talk to me'/>
<Card btnText='Visit me'/>
    </>
  )
}

export default App
