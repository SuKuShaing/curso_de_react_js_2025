import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ["React", "Vite", "TypeScript"];

  return (
    <>
      <h1>Hola Mundo React</h1>
      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </>
  )
}

export default App
