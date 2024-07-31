import React from 'react'
import './css/index.css';

function Battle() {
  return (
    <div>
        <div className='wrap-feed'>
            <div className='section-character'>
                <div className='input-name'>
                    이름:
                    <input type='text' required />
                    <button className='btn-submit'>
                        등록
                    </button>
                </div>
                <div className='output-info'>
                    정신:
                    <div className='info-mental info-custom'>
                        10
                    </div>
                </div>
                <div className='output-info'>
                    신체:
                    <div className='info-physical info-custom'>
                        8
                    </div>
                </div>
                <div className='output-info'>
                    특수:
                    <div className='info-special info-custom'>
                        7
                    </div>
                </div>
                <div className='output-info'>
                    평가:
                    <div className='info-total info-custom'>
                        25 / A
                    </div>
                </div>
            </div>
            <div className='section-result'>
                <div className='result-inner'>
                    <img src='/assets/icon_dice.png' alt='주사위'/>
                    <div className='result-dice result-custom'>
                        36 / 50
                    </div>
                </div>
                <div className='result-inner'>
                    <div className='result-result result-custom'>
                        SUCCESS
                    </div>
                </div>
                <div className='result-inner'>
                    <img src='/assets/icon_sword.png' alt='전투'/>
                    <div className='result-sword result-custom'>
                        Damage: 23 / 25
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Battle
