import React from 'react'
import '../styles/start.css';
import { Link } from 'react-router-dom';
export default function Start() {
    return (
        <div className='start-page'>
            <Link to={'/Game'}> Start 🍀 </Link>
            <a href={'https://www.github.com/noahSnbr07/LuckyThree.git'}> Repo 👨🏽‍💻 </a>
        </div>
    );
}