import { useState } from 'react'
import { render } from 'react-dom'
import '../Vacansy.css'

function Candidats({Candidats}){

    return( <div>    {Candidats.map(Candidats=>
    <details className='Can'>
        <summary className='Cand-Sum'>
       <span className='pos-txt'>{Candidats.Name}</span>
        </summary>
        <div className='tb'>
                <span className='sp-txt'>Статус</span><p className='txt'>{Candidats.Status}</p>
            </div>  
            <div className='tb'>
                <span className='sp-txt'>Пошта</span><p className='txt'>{Candidats.Email}</p>
            </div>  
            <div className='tb'>
                <span className='sp-txt'>Вік</span><p className='txt'>{Candidats.Birth}</p>
            </div> 
    </details>)}
    </div>)
}

export default Candidats;