import React from 'react'
import './css/index.css';
import { useLocation, useHistory } from 'react-router-dom';
function Header() {
    const location = useLocation();
    const path = location.pathname;
    const history = useHistory();

    const menuClick = (url) => {
        history.push(url);
    };

    return (
        <div className='header'>
            <div className='header-left'>
                <div className='logo'>
                <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='전투'/>
                </div>
            </div>
            <div className='header-middle'>
                <ul className='gnb'>
                    <li 
                        className={`gnb-battle ${path === '/battle' ? 'active' : ''}`} 
                        onClick={() => menuClick('/battle')}
                    > 전투 </li>
                     <span className='separator'>|</span>
                    <li 
                        className={`gnb-generation ${path === '/gen' ? 'active' : ''}`}
                        onClick={() => menuClick('/gen')}
                    > 캐릭터 생성 </li>
                     <span className='separator'>|</span>
                    <li 
                        className={`gnb-history ${path === '/history' ? 'active' : ''}`}
                        onClick={() => menuClick('/history')}
                    > 히스토리 </li>
                </ul>
            </div>
            <div className='header-right'>
                <div className='icon-header-right user-info'>
                    <img src={`${process.env.PUBLIC_URL}/assets/icon_user.png`} ></img>
                </div>
                <div className='icon-header-right all-menu'>
                    <img src={`${process.env.PUBLIC_URL}/assets/icon_menu.png`} ></img>
                    
                </div>
            </div>
        </div>
        // <div className='header'>
        //     <div className='wrap'>
        //         <div className='logo'>
        //             NEXIA
        //         </div>
        //         <div className='gnb'>
        //         <ul className='gnb-ul'>
        //             <li className={`gnb-li gnb-battle ${path === '/battle' ? 'active' : ''}`} >
        //                 <Link to="/battle">전투</Link>
        //             </li>
        //             <span className='separator'>|</span>
        //             <li className={`gnb-li gnb-generation ${path === '/gen' ? 'active' : ''}`} >
        //                 <Link to="/gen">캐릭터 생성</Link>
        //             </li>
        //             <span className='separator'>|</span>
        //             <li className={`gnb-li gnb-history ${path === '/history' ? 'active' : ''}`} >
        //                 <Link to="/history">히스토리</Link>
        //             </li>
        //         </ul>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header
