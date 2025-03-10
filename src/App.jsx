import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card/Card'
import './App.css'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'

function App() {
  const items = ["React", "Vite", "TypeScript"];

  return (
    <>
      <h1>Hola Mundo React</h1>
      <CounterWithEffect />
      <NameForm />
      <ToggleButton />
      <Card title="Tarjeta 1" description="Esta es la descripción de la tarjeta 1" />
      <Card title="Tarjeta 2" description="Esta es la descripción de la tarjeta 2" />
      <Card title="Tarjeta 3" description="Esta es la descripción de la tarjeta 3" />
      <Counter />
      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </>
  )
}

export default App
