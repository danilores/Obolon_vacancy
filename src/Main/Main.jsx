import { useState } from 'react'
import { render } from 'react-dom'
import './Main.css'
import Navbar from './NavBar/NavBar'
import Vacansy from './Vacansy/Vacansy'
function Main(){
    
return(
    <div className='main'>
        <Navbar/>
        <Vacansy className='vac'/>
    </div>)
}

export default Main;