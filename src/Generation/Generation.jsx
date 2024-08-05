import React, {useState} from 'react'
import './css/index.css';

function Generation() {
    const [inputs, setInputs] = useState({
        userName: "",
        userNick1: "",
        userNick2: "",
        userNick3: "",
    });

    const [genResult, setGenResult] = useState({
        resultUserName: "",
        resultUserMental: "",
        resultUserPhysical: "",
        resultUserSpecial: "",
        resultUserTotal: " / ",
    });

    const [rollDate, setRollTime] = useState('');
 
    const [inputWarning, setInputWarning] = useState(false);

    const {userName, userNick1, userNick2, userNick3} = inputs;

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
        setRollTime(strDate);
    };

    const validateGenInput = () => {
        console.log('validateGenInput...');
        if (inputs.userName == ''){
            setInputWarning(true);
            return true;
        } else {
            setInputWarning(false);
            return false;
        }
    };

    const inputGenChange = (e) =>{
        const {value, name} = e.target;
        console.log(value, name);
        setInputs({
            ...inputs,
            [name]: value,
        })
        setGenResult({
            resultUserName: userName,
        })
    };

    const generateCharacter = () => {
        console.log(userName, userNick1, userNick2, userNick3);
        createDateStr();
        if (!validateGenInput()) {
            const randNums = [
                ( Math.floor(Math.random() * 10)+1),
                ( Math.floor(Math.random() * 10)+1),
                ( Math.floor(Math.random() * 10)+1)
            ];
    
            const totalNum = randNums[0] + randNums[1] + randNums[2];
            const totalClass = 
                totalNum <= 5 ? 'N' :
                totalNum <= 10 ? 'D' :
                totalNum <= 15 ? 'G' :
                totalNum <= 20 ? 'B' :
                totalNum <= 25 ? 'A' :
                'X';
    
            setGenResult({
                resultUserName: userName,
                resultUserMental: randNums[0],
                resultUserPhysical: randNums[1],
                resultUserSpecial: randNums[2],
                resultUserTotal: `${totalNum}/${totalClass}`
            });
    
            setInputs({
                userName: "",
                userNick1: "",
                userNick2: "",
                userNick3: "",
            })
        };


    }

  return (
    <div className='gen-feed'>
        <div className='wrap-feed'>
            <div className='feed-left'>
                <div className='feed-items'>
                    <div className='txt-label'>이름:</div> 
                    <div className='input-field'>
                        <input name='userName' type='text' value={userName} onChange={inputGenChange} required />
                        <div className={inputWarning ? 'check-gen-input input-warning' : 'check-gen-input'}>
                            * 이름은 필수 항목입니다.
                        </div>
                    </div>
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>별명:</div>
                    <div className='input-field'>
                        <input name='userNick1' type='text' value={userNick1} onChange={inputGenChange} required />
                        <input name='userNick2' type='text' value={userNick2} onChange={inputGenChange} required />
                        <input name='userNick3' type='text' value={userNick3} onChange={inputGenChange} required />
                        <button onClick={generateCharacter} className='btn-submit'>
                            등록
                        </button>
                    </div>
                </div>
            </div>
            <div className='feed-right'>
                <div className='feed-items'>
                    <div className='txt-label'>이름:</div>
                    <div className='gen-result'>
                        {genResult.resultUserName}
                    </div> 
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>정신:</div>
                    <div className='gen-result'>
                        {genResult.resultUserMental}
                    </div> 
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>신체:</div>
                    <div className='gen-result'>
                        {genResult.resultUserPhysical}
                    </div> 
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>특수:</div>
                    <div className='gen-result'>
                        {genResult.resultUserSpecial}
                    </div> 
                </div>
                <div className='feed-items'>
                    <div className='txt-label'>평가:</div>
                    <div className='gen-result'>
                        {genResult.resultUserTotal}
                    </div> 
                </div>
            </div>
        </div>
        <div className='feed-bottom'>
            <div className='roll-date'>Gen. Date:</div>
            <div className='roll-date'>{rollDate}</div>
        </div>
    </div>
  )
}

export default Generation
