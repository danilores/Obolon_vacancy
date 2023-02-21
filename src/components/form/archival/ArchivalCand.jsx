import React from 'react';
import FormInput from '../../../ui/Input/FormInput';

const ArchivalCand = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} style={{marginTop: '20px'}}>
            <select style={{width: "calc(100% - 20px)", padding: '10px', margin: '0px 10px'}} name="user_profile_color_1">
                <option value="1">Виктор</option>
                <option value="2">Максим</option>
                <option value="3">Миколай</option>
                <option value="4">Роман</option>
                <option value="5">Вікторія</option>
                <option value="6">Світлана</option>
            </select>
            <FormInput title='' value={'Зберегти'} type='submit' />
        </form>
    );
};

export default ArchivalCand;