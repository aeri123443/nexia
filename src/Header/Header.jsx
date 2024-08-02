import React from 'react'
import './css/index.css';
import { useLocation, Link } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const path = location.pathname;

    return (
        <div className='header'>
            <div className='wrap'>
                <div className='logo'>
                    Ryanguni Commu
                </div>
                <div className='gnb'>
                <ul className='gnb-ul'>
                    <li className={`gnb-li gnb-battle ${path === '/battle' ? 'active' : ''}`} >
                        <Link to="/battle">전투</Link>
                    </li>
                    <span className='separator'>|</span>
                    <li className={`gnb-li gnb-generation ${path === '/gen' ? 'active' : ''}`} >
                        <Link to="/gen">캐릭터 생성</Link>
                    </li>
                    <span className='separator'>|</span>
                    <li className={`gnb-li gnb-history ${path === '/history' ? 'active' : ''}`} >
                        <Link to="/history">히스토리</Link>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
