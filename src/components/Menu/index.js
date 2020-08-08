import React from 'react';
import logo from '../../assets/img/logo3.png'
import './Menu.css'
import Button from '../Button'

function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={logo} alt="Infoflix logo" />
            </a>
            <Button as='a' className='ButtonLink' href='/'>
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;