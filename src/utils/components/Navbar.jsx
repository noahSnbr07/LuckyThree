import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/navbar.css';
import { BalanceContext, IntermediateValueContext } from '../../App';

export default function Navbar() {
    const [balance] = useContext(BalanceContext);
    const [intermediateValue] = useContext(IntermediateValueContext);

    return (
        <nav className='navbar'>
            <Link to={'/'}> Lucky Three </Link>
            <div>
                <p> 💰:${balance} </p>
                <p> 📋 $ {intermediateValue} </p>
            </div>
        </nav>
    );
}
