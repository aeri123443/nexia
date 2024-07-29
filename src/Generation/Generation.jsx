import React from 'react'
import './css/index.css';

function Generation() {
  return (
    <div>
        <div className='wrap-feed'>
            <div className='section-generaiton'>
                <div className='input-name'>
                    이름:
                    <input type='text' required />
                </div>
                <div className='input-nickname'>
                    <div className='label-nickname'>
                        별명:
                    </div>
                    <div className='inner-nickname'>
                        <input type='text' required />
                        <input type='text' required />
                        <input type='text' required />
                        <button className='btn-submit'>
                            등록
                        </button>
                    </div>
                </div>
            </div>
            <div className='section-result'>
                <div className='result-inner'>
                    정신:
                    <div className='result-mental result-custom'>
                        10
                    </div>
                </div>
                <div className='result-inner'>
                    신체:
                    <div className='result-mental result-custom'>
                        8
                    </div>
                </div>
                <div className='result-inner'>
                    특수:
                    <div className='result-mental result-custom'>
                        7
                    </div>
                </div>
                <div className='result-inner'>
                    평가:
                    <div className='result-mental result-custom'>
                        25 / A 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Generation
