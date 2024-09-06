import React, {useState} from 'react'
import {getUserByName} from '../Utils/userDB.js';
import './css/index.css';

function Battle() {

    const levelRanges = {
        'N': { min: 1,  max: 5 },
        'D': { min: 6,  max: 10 },
        'G': { min: 11, max: 15 },
        'B': { min: 16, max: 20 },
        'A': { min: 21, max: 25 },
        'X': { min: 26, max: 30 },
    };

    const [inputName, setInputName] = useState('');

    const [infoCharacter, setInfoCharacter] = useState({
        mental: '',
        physical: '',
        special: '',
        total: '',
        class: '',
    });

    const [battleResult, setBattleResult] = useState({
        dice: '-',
        isSuccess: "SUCCESS",
        damage: '-',
        date: ''
    });

    const [successColor, setSuccessColor] = useState('black');

    const handleNameChange = (evevt) => {
        setInputName(evevt.target.value);
    };

    const getminMaxDice = (userLevel) => {
        return levelRanges[userLevel] || { min: 0,  max: 0 };
    };

    const createDateStr = () => {
        const today = new Date();
        let todayMonth = today.getMonth()+1;
        let todayDate = today.getDate();
        let todayHours = today.getHours();
        let todayMins = today.getMinutes();

        todayMonth = todayMonth<10 ? `0${todayMonth}` : todayMonth;
        todayDate = todayDate<10 ? `0${todayDate}` : todayDate;
        todayHours = todayHours<10 ? `0${todayHours}` : todayHours;
        todayMins = todayMins<10 ? `0${todayMins}` : todayMins;

        const strDate = `${todayMonth}/${todayDate} ${todayHours}:${todayMins}`
        return strDate
    };

    async function onBattle(){

        if (inputName) {

            const userData = await getUserByName(inputName);

            if (userData) {
                console.log("userData");
                console.log(userData);
                
                setInfoCharacter({
                    mental: Number(userData.Mental.N),
                    physical: Number(userData.Physical.N),
                    special: Number(userData.Special.N),
                    total: Number(userData.Total.N),
                    class: userData.Class.S,
                });

                // 1d50을 굴리고 
                const dice = Math.floor(Math.random() * 50)+1;

                // 자신의 등급에 해당하는 숫자 최고수치(A라면 25) 이하로 나와야 공격 성공임. 
                const minMax = getminMaxDice(userData.Class.S); 
                const strDate = createDateStr();
                if(dice <= minMax.max) {
                    // 데미지 수치는 자신의 등급에 해당하는 숫자 중 랜덤 (A라면 20~25)중 하나로 들어감
                    const damage = Math.floor(Math.random() * (minMax.max - minMax.min + 1)) + minMax.min;
                    setBattleResult({
                        dice: dice,
                        isSuccess: "SUCCESS",
                        damage: damage,
                        date: strDate
                    });
                    setSuccessColor("green");
                } else {
                    setBattleResult({
                        dice: dice,
                        isSuccess: "FAILURE",
                        damage: '-',
                        date: strDate
                    });
                    setSuccessColor("red");
                }
            } else {
                console.log("해당 이름이 존재하지 않습니다.");
            }
        }
    };

  return (
    <div className='battle-feed'>
        <div className='wrap-feed'>
            <div className='feed-left'>
                <div className='feed-items'>
                    <div className='txt-label'>이름:</div>
                    <input type='text' value={inputName} onChange={handleNameChange} required />
                    <button onClick={onBattle} className='btn-submit'>등록</button>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>정신:</div>
                    <div className='info-character'>{infoCharacter.mental}</div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>신체:</div>
                    <div className='info-character'>{infoCharacter.physical}</div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>특수:</div>
                    <div className='info-character'>{infoCharacter.special}</div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>평가:</div>
                    <div className='info-character'>{infoCharacter.total} / {infoCharacter.class}</div>
                </div>
            </div>
            <div className='feed-right'>
                <div className='feed-items-center'>
                    <div className='img-label'>
                        <img src={`${process.env.PUBLIC_URL}/assets/icon_dice.png`} alt='주사위'/>
                    </div>
                    <div className='battle-result'>{battleResult.dice} / 50</div>
                </div>
                <div className='feed-items-center'>
                    <div className='battle-result' style={{color: successColor}}>{battleResult.isSuccess}</div>
                </div>
                <div className='feed-items-center'>
                    <div className='img-label'>
                        <img src={`${process.env.PUBLIC_URL}/assets/icon_sword.png`} alt='주사위'/>
                    </div>
                    <div className='battle-result'>{battleResult.damage}</div>
                </div>
            </div>
        </div>
        <div className='feed-bottom'>
            <div className='roll-date'>Gen. Date:</div>
            <div className='roll-date'>{battleResult.date}</div>
        </div>
    </div>
  )
}

export default Battle
