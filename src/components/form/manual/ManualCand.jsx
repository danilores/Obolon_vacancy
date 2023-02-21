import React, { useState } from 'react';
import FormInput from '../../../ui/Input/FormInput';

const ManualCand = ({ candidats = [], id }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [photo, setPhoto] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCandidat = {
            Name: name,
            Status: 'В роботі',
            Email: email,
            Birth: age
        }

        candidats.push(newCandidat);

        // const img = document.querySelector('input[type="file"]').files[0];
        // const resume = document.querySelector('input[type="file"]').files[1];

        // fetching new candidat to database...

        setName('');
        setEmail('');
        setPhoto('');
        setAge('');

        alert('Додано кандидата');
    }

    const handleImg = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            if (event.target.result) {
                console.log(event.target.result);
                setPhoto(event.target.result)
            }
        };

        reader.readAsDataURL(file);
    }

    const handleResume = (e) => {
        const file = e.target.files[1];
        const reader = new FileReader();

        reader.onload = function(event) {
            if (event.target.result) {
                console.log(event.target.result);
            }
        };

        reader.readAsText(file);
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormInput title="Ім'я" type='txt' required value={name} setValue={setName} />
            <FormInput title='Пошта' type='email' required value={email} setValue={setEmail} />
            <FormInput title='Вік' type='number' required value={age} setValue={setAge} />
            <div style={{margin: '10px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <p>Фото</p>
                <input type="file" required onChange={handleImg} />
                <img style={{width: '100px'}} src={photo} alt="" accept="image/png, image/jpg, image/jpeg" />
            </div>
            <div style={{margin: '10px', display: 'flex', flexDirection: 'column', gap: '8px'}}>
                <p>Резюме</p>
                <input type="file" required onChange={handleResume} />
            </div>
            <FormInput title='' value={'Зберегти'} type='submit' />
        </form>
    );
};

export default ManualCand;