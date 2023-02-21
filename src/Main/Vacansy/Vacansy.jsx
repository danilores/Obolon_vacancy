import { useState } from 'react'
import { render } from 'react-dom'
import './Vacansy.css'
import DefVac from './Blanck'
import VacansyList from '../VacansyList'
function Vacansy(){
    return(<div>
     { DefVac.map(arr=><VacansyList arr={arr}/>)}
     </div> )
}

export default Vacansy;