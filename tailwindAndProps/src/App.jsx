import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
    <h1 className='bg-green-700 rounded-xl mb-10 '>Tailwind</h1>

    <Card name ="Ashish Jangde" btnText="Hire Me"/>
    <Card name="Jasmine Chouhan" btnText="Rejectme"/>
    <Card name='Pradhyan Tiwari' btnText='tabort' />
    </>
  )
}

export default App
