import { useState } from 'react'
import { render } from 'react-dom'

function Comments({Comments}){
    const options = { timeZone: "Europe/Kiev", 
				hour12: false,
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric'
			};
return(
    
    <div className='Comments'>
        {Comments.map(Coment=>
            <div className='Coment'>
                <div className='cm-hd'>
                <span className='cm-name'>{Coment.Name}</span>
                <span className='cm-date'>{Coment.Data.toLocaleString('uk-UA', options)}</span>
                </div>
                <p>{Coment.Comment}</p>
            </div>
)}    
    </div>
    
    );
}

export default Comments;