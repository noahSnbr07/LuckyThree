import React, { useState } from 'react'
import '../styles/start.css';
import { Link } from 'react-router-dom';
import rgbToHex from '../utils/functions/rgbToHex';
export default function Start() {
    const [color, setColor] = useState('#004100');

    const changeColor = () => {
        const getRandom = (max) => { return Math.floor(Math.random() * max); }
        setColor(rgbToHex(getRandom(255), getRandom(255), getRandom(255)));
        document.documentElement.style.setProperty('--bg', color)
    }

    return (
        <div className='start-page'>
            <Link to={'/Game'}> Start 🍀 </Link>
            <a href={'https://www.github.com/noahSnbr07/LuckyThree.git'}> Repo 👨🏽‍💻 </a>
            <a onClick={() => { changeColor(); }}> {color} 🎨 </a>
        </div>
    );
}