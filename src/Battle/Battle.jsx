import React from 'react'
import './css/index.css';

function Battle() {
  return (
    <div className='battle-feed'>
        <div className='wrap-feed'>
            <div className='feed-left'>
                <div className='feed-items'>
                    <div className='txt-label'>이름:</div>
                    <input type='text' required />
                    <button className='btn-submit'>등록</button>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>정신:</div>
                    <div className='info-character'>10</div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>신체:</div>
                    <div className='info-character'>10</div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>특수:</div>
                    <div className='info-character'>10</div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>평가:</div>
                    <div className='info-character'>10 / A</div>
                </div>
            </div>
            <div className='feed-right'>
                <div className='feed-items-center'>
                    <div className='img-label'>
                        <img src={`${process.env.PUBLIC_URL}/assets/icon_dice.png`} alt='주사위'/>
                    </div>
                    <div className='battle-result'>36 / 50</div>
                </div>
                <div className='feed-items-center'>
                    <div className='battle-result'>SUCCESS</div>
                </div>
                <div className='feed-items-center'>
                    <div className='img-label'>
                        <img src={`${process.env.PUBLIC_URL}/assets/icon_sword.png`} alt='주사위'/>
                    </div>
                    <div className='battle-result'>36 / 50</div>
                </div>
            </div>
        </div>
        <div className='feed-bottom'>
            <div className='roll-date'>Gen. Date:</div>
            <div className='roll-date'>2024.10.20 30:20</div>
        </div>
    </div>
  )
}

export default Battle
