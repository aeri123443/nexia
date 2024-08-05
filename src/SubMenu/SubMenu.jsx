import React from 'react'
import './css/index.css'
import { useLocation, useHistory } from 'react-router-dom';

function SubMenu() {
    const location = useLocation();
    const path = location.pathname;
    const history = useHistory();

    const menuClick = (url) => {
        history.push(url);
    };

    return (
    <div className='sub-menu'>
        <div className='wrap-sub-menu'>
            <ul className='sub-menu-items'>
                <li 
                    className={`sub-list ${path === '/battle' ? 'active' : ''}`} 
                    onClick={() => menuClick('/battle')}
                > 전투 </li>
                <li 
                    className={`sub-list ${path === '/gen' ? 'active' : ''}`} 
                    onClick={() => menuClick('/gen')}
                > 캐릭터 생성 </li>
                <li 
                    className={`sub-list ${path === '/history' ? 'active' : ''}`} 
                    onClick={() => menuClick('/history')}
                > 히스토리 </li>
            </ul>
        </div>
    </div>
    )
}

export default SubMenu
