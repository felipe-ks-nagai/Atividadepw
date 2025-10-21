import React from 'react';
import style from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Header() {

    const isActive = (href) => {
        try {
            return window.location.pathname === href;
        } catch {
            return false;
        }
    };

        const navigate = useNavigate();
    

    return (
        <header className={style.containerStyle}>
            <nav className={style.navStyle} aria-label="Main navigation">
                <button 
                    className={`${style.linkBase} ${isActive('/') ? style.linkActive : ''}`}
                    onClick={() => navigate('/')}
                    aria-current={isActive('/') ? 'page' : undefined}
                >
                    Home
                </button>

                <button
                    className={`${style.linkBase} ${isActive('/calculadora') ? style.linkActive : ''}`}
                    onClick={() => navigate('/calculadora')}
                    aria-current={isActive('/calculadora') ? 'page' : undefined}
                >
                    Calculadora
                </button>

                <button
                    className={`${style.linkBase} ${isActive('/404') ? style.linkActive : ''}`}
                    onClick={() => navigate('/404')}
                    aria-current={isActive('/404') ? 'page' : undefined}
                >
                    404 page
                </button>
            </nav>
        </header>
    );
}
