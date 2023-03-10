import { useState } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import './Vacansy/Vacansy.css'
import Comments from './Vacansy/Comments'
import '/job-search.svg'
import Candidats from './Vacansy/Candidats/Candidats'
import Modal from '../components/modal/Modal'

import ManualCand from '../components/form/manual/ManualCand';
import ArchivalCand from '../components/form/archival/ArchivalCand';

const rootModal = document.getElementById('modal-root');

function VacansyList({ arr }){
    const [shouldShow, setShouldShow] = useState(false);
    const [addType, setAddType] = useState('');
    
    return(
        <div>
            <details className='Vacansy'>
                <summary className='db-txt'>
                    <div className='sp-btv'>
                    <p className='pos-txt'><span className='hd-txt'>Замовник </span>{arr.Name}</p>
                    <div><span className='date-txt'>Дата створення замовлення {arr.data} </span>
                            <p className='id-txt'>id:{arr.id}</p></div>
                    </div>
                    <p className='pos-txt'><span className='hd-txt'> </span>{arr.Position}</p>
                    <p className='pos-txt'>{arr.Status}</p>
                </summary>
                <div className='tb'>
                    <span className='sp-txt'>Підрозділ</span><p className='txt'>{arr.SubDep}</p>
                </div>  
                <div className='tb'>
                    <span className='sp-txt'>Робота</span><p className='txt'>{arr.Work}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>СОП</span><p className='txt'>{arr.Sop}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Графік роботи</span><p className='txt'>{arr.Graphic}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Т.Н Керівника</span><p className='txt'>{arr.Tn}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Основні обов'язки</span><p className='txt'>{arr.Responseobility}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Відрядження і як часто</span><p className='txt'>{arr.Sand}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Місце роботи</span><p className='txt'>{arr.PlaceofWrk}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Загальні вимоги до кандидата</span><p className='txt'>{arr.Want}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Додаткові вимоги</span><p className='txt'>{arr.addWant}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Знання і навички</span><p className='txt'>{arr.KnowandSkill}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Особливі вимоги</span><p className='txt'>{arr.SpecWant}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Бажані терміни</span><p className='txt'>{arr.Terms}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Оплата на випробувальний період</span><p className='txt'>{arr.PayonIntern}</p>
                </div>
                <div className='tb'>
                    <span className='sp-txt'>Оплата після випробувального періоду</span><p className='txt'>{arr.Pay}</p>
                </div>
                <p className='Com-N'>Коментарі</p>
                <Comments Comments={arr.Coments}/>
            </details>
            <details className='Candidat'>
                <summary className='Cand-Sum'>
                    <img src="/job-search.svg" width='25px' height='25px' />  <span className='pos-txt'>Кандидати</span>
                    <button onClick={() => setShouldShow(!shouldShow)} className='add-candidate_button'>Додати кандитата</button>
                </summary>
                <Candidats Candidats={arr.Candidats}/>
            </details>
            {shouldShow 
                ? ReactDOM.createPortal(
                    <Modal active={shouldShow} setActive={() => setShouldShow(false)}>
                        <div>
                            <h2>Додати нового кандидата</h2>
                            <p style={{margin: '10px 0px'}}>Додати кандидата власноруч, чи з архіву кандидатів?</p>
                            <div style={{display: 'flex', justifyContent: 'flex-start', gap: '5px'}}>
                                <button onClick={() => setAddType('manual')} className='add-candidate_button'>Власноруч</button>
                                <button onClick={() => setAddType('archival')} className='add-candidate_button'>З архіву</button>
                            </div>
                            {addType === 'archival'
                                ? <ArchivalCand />
                                : <ManualCand candidats={arr.Candidats} id={arr.id} />
                            }
                        </div>
                    </Modal>,
                    rootModal)
                : null}
        </div>
    )
}
    
export default VacansyList;
    // <p className='txt'><span className='sp-txt'>Загальні вимоги до кандидата </span>{arr.Want}</p>
    // <p className='txt'><span className='sp-txt'>Додаткові вимоги </span>{arr.addWant}</p>
    // <p className='txt'><span className='sp-txt'>Знання і навички </span>{arr.KnowandSkill}</p>
    // <p className='txt'><span className='sp-txt'>Особливі вимоги </span>{arr.SpecWant}</p>
    // <p className='txt'><span className='sp-txt'>Бажані терміни </span>{arr.Terms}</p>
    // <p className='txt'><span className='sp-txt'>Інші відомості </span>{arr.anInfo}</p>
    // <p className='txt'><span className='sp-txt'>Оплата на випробувальний період</span>{arr.PayonIntern}₴</p>
    // <p className='txt'><span className='sp-txt'>Оплата після випробувального періоду </span>{arr.Pay}₴</p>