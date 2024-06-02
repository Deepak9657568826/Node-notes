import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import SecondDiv from './component/SecondDiv'
import Four from './component/Four'
import Third from './component/Third'
import Roadmap from './component/Roadmap'
import Faq from './component/Faq'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='mainContainer'>
     <Navbar/>
     <SecondDiv/>
     <Third/>
     <Four/>
     <Roadmap/>
     <Faq/>
     <Footer/>
    </div>
  )
}

export default App
