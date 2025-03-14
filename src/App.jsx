import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card/Card'
import './App.css'
import Counter from './components/Counter'
import ToggleButton from './components/ToggleButton'
import NameForm from './components/NameForm'
import CounterWithEffect from './components/CounterWithEffect'
import Button from './components/Button/Button'
import Text from './components/Text/Text'
import StaticComponent from './components/StaticComponent/StaticComponent'
import UserList from './components/UserList/UserList'
import UserListWhitLoading from './components/UserListWhitLoading/UserListWhitLoading'

function App() {
  const items = ["React", "Vite", "TypeScript"];

  return (
    <>
      <h1 className='text-3xl font-bold underline'>Curso de React</h1>
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Lista de Usuarios con loading</h2>
      <UserListWhitLoading />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>User list, componente dinámico</h2>
      <UserList />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>List, componente estatico</h2>
      <StaticComponent />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Solo texto</h2>
      <Text />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Botones</h2>
      <Button>Gris</Button>
      <Button blue>Azul</Button>
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Counter With Effect</h2>
      <CounterWithEffect />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Input</h2>
      <NameForm />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Botón toggle</h2>
      <ToggleButton />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Tarjeta como componente</h2>
      <Card title="Tarjeta 1" description="Esta es la descripción de la tarjeta 1" />
      <Card title="Tarjeta 2" description="Esta es la descripción de la tarjeta 2" />
      <Card title="Tarjeta 3" description="Esta es la descripción de la tarjeta 3" />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Botones para aumentar y decrementar</h2>
      <Counter />
      <hr className='my-4 text-gray-300' />
      <h2 className='text-2xl font-bold mb-3 mt-8 mx-2'>Lista de items</h2>
      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </>
  )
}

export default App
