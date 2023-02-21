import { useState } from 'react'
import { render } from 'react-dom'
import './NavBar.css';

function Navbar(){

    return(      <nav class="navbar">
    <ul>
    <img src='logo_en.svg' width="62.5px" lenght="40px"/>
    <li><a href="#">Активні вакансії</a></li>
        <li><a href="#">Каталог кандидатів</a></li>
        <li><a href="#">Закриті вакансії</a></li>
    </ul>
</nav>)
}

export default Navbar;