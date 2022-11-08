import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../Images/planet-001.svg";
import Api from '../api/plannetApi';
import "./Join.scss"
import "../App";

const ContainerJoin = styled.div`
    height: 100vh;
    display:flex ;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    background-color: white;
`;
const Logo = styled.div`
    margin-top: -30px;
    a {
        font-family: 'Comfortaa', cursive;
        font-size: 67px;
        font-weight: bold;
        color: #4555AE;
    }
`;

const Join = () => {
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    const [inputConPw, setInputConPw] = useState("");
    const [inputName, setInputName] = useState("");
    const [inputNickname, setInputNickname] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputTel, setInputTel] = useState("");
 
    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [telMessage, setTelMessage] = useState("");
 
    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [isTel, setIsTel] = useState(true);
 
    // ID 길이 체크
    const onChangId = (e) => {
        setInputId(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 12) {
            setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
            setIsId(false);    
        } else {
            setIdMessage("올바른 형식입니다.");
            setIsId(true);
        }
    }

    // 중복 체크
    const onBlurIdCheck = async() => {
        // 가입 여부 우선 확인
        const memberCheck = await Api.memberRegCheck(inputId, "TYPE_ID");
        if (memberCheck.data.result === "OK" && isId) {
            setIdMessage("사용가능한 ID입니다.");
        } else if(memberCheck.data.result === "OK" && !isId){
            setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
        }
        else {
            setIdMessage("이미 사용하고 있는 ID입니다.");
            setIsId(false);
        } 
    }

    // 비밀번호 정규식 체크
    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해 주세요.')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 :)')
            setIsPw(true);
        }
        if (passwordCurrent !== inputConPw) {
            setConPwMessage('비밀번호가 일치하지 않습니다.')
            setIsConPw(false)   
        }
    }

    // 비밀번호 확인 체크
    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setInputConPw(passwordCurrent)
        if (passwordCurrent !== inputPw) {
            setConPwMessage('비밀번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setConPwMessage('비밀번호가 일치 합니다.')
            setIsConPw(true);
        }      
    }
    
    const onChangeName = (e) => {
        setInputName(e.target.value);
        setIsName(true);
    }
    
    // 닉네임을 적었으면 해당 닉네임으로 저장
    const onChangeNickname = (e) => {
            setInputNickname(e.target.value);
    }
    
    // 이메일 확인 체크
    const onChangeEmail = (e) => {
        const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const emailCurrent = e.target.value ;
        setInputEmail(emailCurrent);
        if(!emailRegex.test(emailCurrent)){
            setEmailMessage('이메일의 형식이 올바르지 않습니다.')
            setIsEmail(false);
        } else {
            setEmailMessage('이메일의 형식이 올바르게 입력되었습니다.')
            setIsEmail(true);
        }
    }

    const onBlurEmailCheck = async() => {
        // 가입 여부 우선 확인
        const memberCheck = await Api.memberRegCheck(inputEmail, "TYPE_EMAIL");
        if (memberCheck.data.result === "OK" && isEmail) {
            setEmailMessage("사용가능한 Email입니다.");
        } else if(memberCheck.data.result === "OK" && !isEmail){
            setEmailMessage("이메일의 형식이 올바르지 않습니다.");
        } else {
            setEmailMessage("이미 사용하고 있는 Email입니다.");
            setIsEmail(false);
        } 
    }

    const onChangeTel = (e) => {
       setInputTel(e.target.value.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    }

    const onBlurTelCheck = async() => {
        // 가입 여부 우선 확인
        const memberCheck = await Api.memberRegCheck(inputTel, "TYPE_TEL");
        if (memberCheck.data.result === "OK" ) {
            setTelMessage("사용가능한 전화번호입니다.");
        } else {
            setTelMessage("이미 사용하고 있는 전화번호입니다.");
            setIsTel(false)
        } 
    }

    // ENTER 키를 눌렀을 때 회원가입 전송
    const onKeyDownJoin = (e) => {
        if(e.key === 'Enter'){
            onClickJoin();
        }
    }

    const onClickJoin = async() => {
        const memberReg = await Api.memberReg(inputId, inputPw, inputName, inputNickname, inputEmail, inputTel);
        if(memberReg.data.result === "OK") {
            window.localStorage.setItem("userId", inputId);
            window.localStorage.setItem("isLogin", "true");
            window.location.replace("/Home");
        }
    }

    return(
        <>
            <ContainerJoin>
                <Logo><LogoImg width="90px" viewBox="30 150 430 220"/><Link to="/" className="logo">Plannet</Link></Logo>
                <div className="session">
                    <p>
                        아이디*
                        {inputId.length > 0 && <span>{idMessage}</span>}
                    </p>
                    <input placeholder="아이디" value ={inputId} onChange={onChangId} type={'text'} onBlur={onBlurIdCheck}/>
                </div>
                <div className="session">
                    <p>
                        비밀번호*
                        {inputPw.length > 0 && <span>{pwMessage}</span>}
                    </p>
                    <input type='password' placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
                </div>
                <div className="session">
                    <p>
                        비밀번호 확인
                        {inputPw.length > 0 && <span>{conPwMessage}</span>}
                    </p>
                    <input type='password' placeholder="패스워드 확인" value ={inputConPw} onChange={onChangeConPw}/>
                </div>
                <div className="session">
                    <p>이름*</p>
                    <input type='text'placeholder="이름" value ={inputName} onChange={onChangeName}/>
                </div>
                <div className="session">
                    <p>닉네임</p>
                    <input type='text' placeholder="닉네임" value ={inputNickname} onChange={onChangeNickname}/>
                </div>
                <div className="session">
                    <p>
                        이메일*
                        {inputEmail.length > 0 && <span>{emailMessage}</span>}
                    </p>
                    <input type='email' placeholder="이메일" value={inputEmail} onChange={onChangeEmail} onBlur={onBlurEmailCheck}/>
                </div>
                <div className="session">
                    <p>
                        전화번호
                        {inputTel.length > 0 && <span>{telMessage}</span>}
                    </p>
                    <input type='tel' placeholder="휴대폰번호('-' 제외)" value ={inputTel} onChange={onChangeTel} onBlur={onBlurTelCheck} onKeyDown={onKeyDownJoin}/>
                </div>
                <div className="session">
                    <button onClick={onClickJoin} disabled={!(isId && isPw && isConPw && isName && isEmail && isTel)}>가입하기</button>
                </div>
            </ContainerJoin>
        </> 
    );
};

export default Join;
