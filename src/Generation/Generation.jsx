// 인풋값 체크하고 데이터베이스 저장
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

    const [inputWarning, setInputWarning] = useState(false);

    const {userName, userNick1, userNick2, userNick3} = inputs;
    // const {resultUserName, resultUserMental, resultUserPhysical, resultUserSpecial, resultUserTotal} = outputs;

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
    <div>
        <div className='wrap-feed'>
            <div className='section-generaiton'>
                <div className='input-name'>
                    이름:
                    <input name='userName' type='text' value={userName} onChange={inputGenChange} required />
                </div>
                <div className='input-nickname'>
                    <div className='label-nickname'>
                        별명:
                    </div>
                    <div className='inner-nickname'>
                        <input name='userNick1' type='text' value={userNick1} onChange={inputGenChange} required />
                        <input name='userNick2' type='text' value={userNick2} onChange={inputGenChange} required />
                        <input name='userNick3' type='text' value={userNick3} onChange={inputGenChange} required />
                        <button onClick={generateCharacter} className='btn-submit'>
                            등록
                        </button>
                        <div className={inputWarning ? 'check-gen-input input-warning' : 'check-gen-input'} >이름은 필수 항목입니다.</div>
                    </div>
                </div>
            </div>
            <div className='section-result'>
                <div className='result-inner'>
                    이름:
                    <div className='result-mental result-custom'>
                        {genResult.resultUserName}
                    </div>
                </div>
                <div className='result-inner'>
                    정신:
                    <div className='result-mental result-custom'>
                        {genResult.resultUserMental}
                    </div>
                </div>
                <div className='result-inner'>
                    신체:
                    <div className='result-mental result-custom'>
                        {genResult.resultUserPhysical}
                    </div>
                </div>
                <div className='result-inner'>
                    특수:
                    <div className='result-mental result-custom'>
                        {genResult.resultUserSpecial}
                    </div>
                </div>
                <div className='result-inner'>
                    평가:
                    <div className='result-mental result-custom'>
                        {genResult.resultUserTotal}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Generation
