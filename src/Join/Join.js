import "./Join.css"
import React, { useState } from 'react';
import img1 from "../Images/logoPic.png";
import "../App";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Api from '../api/plannetApi';
import Modal from '../Utill/Modal.js';

// 구현해야 할 것
// 1. 닉네임을 적지 않았을 때 자동으로 DB에 이름이 닉네임으로 동일하게 전송되도록
// 2. 이메일 오류 유효성 검사
// 3. 전반적인 디자인 수정
// 4. 다 채우지 않았을 때 MODAL 띄우거나 혹은 아예 버튼을 DISABLE 속성을 넣어두기

const ContainerJoin = styled.div`
    height: 90vh;
    display:flex ;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`;
const Logo = styled.div`
    text-decoration: none;
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
    // const [inputBirth,setInputBirth] = useState("2000-01-01");
 
    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");
    // const [mailMessage, setMailMessage] = useState("");
 
    // 유효성 검사
    const [isId, setIsId] = useState(false);
    const [isPw, setIsPw] = useState(false)
    const [isConPw, setIsConPw] = useState(false);
    const [isName, setIsName] = useState(false);
    const [isNickname, setIsNickname] = useState(false);
    const [isMail, setIsMail] = useState(false);
    const [isTel, setIsTel] = useState(false);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalClose, setModalClose] =useState(false);
    const [modalText, setModelText] = useState("중복된 아이디 입니다.");
    // 팝업
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
 
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
        if (memberCheck.data.result === "OK") {
            setIdMessage("사용가능한 ID입니다.");
        } else {
            setIdMessage("이미 사용하고 있는 ID입니다.");
        } 
    }

    const onBlurEmailCheck = async() => {
        // 가입 여부 우선 확인
        const memberCheck = await Api.memberRegCheck(inputEmail, "TYPE_EMAIL");
        if (memberCheck.data.result === "OK") {
            setIdMessage("사용가능한 닉네임입니다.");
        } else {
            setIdMessage("이미 사용하고 있는 닉네임입니다.");
        } 
    }

    const onBlurTelCheck = async() => {
        // 가입 여부 우선 확인
        const memberCheck = await Api.memberRegCheck(inputTel, "TYPE_TEL");
        if (memberCheck.data.result === "OK") {
            setIdMessage("사용가능한 이메일입니다.");
        } else {
            setIdMessage("이미 사용하고 있는 이메일입니다.");
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
            setPwMessage('안전한 비밀번호에요 : )')
            setIsPw(true);
        }        
    }

    // 비밀번호 확인 체크
    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setInputConPw(passwordCurrent)
        if (passwordCurrent !== inputPw) {
            setConPwMessage('비밀 번호가 일치하지 않습니다.')
            setIsConPw(false)
        } else {
            setConPwMessage('비밀 번호가 일치 합니다. )')
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
            setIsNickname(true);
    }

    // 닉네임을 적지 않았으면, inputName의 값으로 저장
    const onBlurNickname = (e) => {
        const NicknameCurrnet = e.target.value;
        if (NicknameCurrnet.length === 0){ 
            setInputNickname(inputName);
        }
    }
 
    const onChangeMail = (e) => {
        setInputEmail(e.target.value);
        setIsMail(true);
    }

    const onChangeTel = (e) => {
       setInputTel(e.target.value);
       setIsTel(true);
    }

    //  onChangeBirth
    // const onChangeBirth = (e) => {
    //     const a = setInputBirth(e.target.value);
    //     console.log(a);
    // }

    // ENTER 키를 눌렀을 때 회원가입 전송
    function f_enter(){
        if(window.event.keyCode === 13){
            onClickJoin();
        }
    }

    const onClickJoin = async() => {
        console.log("Click 회원가입");
        // 가입 여부 우선 확인  
        const memberCheck = await Api.memberRegCheck(inputId);
        console.log(memberCheck.data.result);
        // 가입 여부 확인 후 가입 절차 진행

        if (memberCheck.data.result === "OK") {
            console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
            const memberReg = await Api.memberReg(inputId, inputPw, inputName, inputNickname, inputEmail, inputTel);
            console.log(memberReg.data.result);
            if(memberReg.data.result === "OK") {
                window.location.replace("/Home");
            } else {
                setModalOpen(true);
                setModelText("회원 가입에 실패 했습니다. 중복체크나 공란을 확인하세요.");
            }

        } else {
            console.log("이미 가입된 회원 입니다.")
            setModalOpen(true);
            setModelText("이미 가입된 회원 입니다.");
        } 
    }

    return(
        <>
            <ContainerJoin>
                <div className="login-logo"><img src={img1} alt="Logo" width={'90px'} height={'70px'}/>
                <Logo><Link to="/main" className="logo">Plannet</Link></Logo></div>
                <div className="session">
                    <p className="joinTitle">아이디</p>
                    <input className="inputJoin" placeholder="아이디" value ={inputId} onChange={onChangId} type={'text'} onBlur={onBlurIdCheck}/>
                </div>
                <div className="hint">
                    {inputId.length > 0 && <span className={`message ${isId ? 'success' : 'error'}`}>{idMessage}</span>}
                </div> 
                <div className="session">
                    <p className="joinTitle">비밀번호</p>
                    <input className="inputJoin" type='password' placeholder="패스워드" value ={inputPw} onChange={onChangePw}/>
                </div>
                <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isPw ? 'success' : 'error'}`}>{pwMessage}</span>)}
                </div> 
                <div className="session"n>
                    <p className="joinTitle">비밀번호 확인</p>
                    <input className="inputJoin" type='password' placeholder="패스워드 확인" value ={inputConPw} onChange={onChangeConPw}/>
                </div>
                <div className="hint">
                    {inputPw.length > 0 && (
                    <span className={`message ${isConPw ? 'success' : 'error'}`}>{conPwMessage}</span>)}
                </div> 
                <div className="session">
                    <p className="joinTitle">이름</p>
                    <input className="inputJoin" type='text'placeholder="이름" value ={inputName} onChange={onChangeName}/>
                </div>
                <div className="session">
                    <p className="joinTitle">닉네임</p>
                    <input className="inputJoin" type='text' placeholder="닉네임" value ={inputNickname} onChange={onChangeNickname} onBlur={onBlurNickname}/>
                </div>
                <div className="session">
                    <p className="joinTitle">이메일</p>
                    <input className="inputJoin" type='email' placeholder="이메일" value ={inputEmail} onChange={onChangeMail}/>
                </div>
                <div className="session">
                    <p className="joinTitle">전화번호</p>
                    <input className="inputJoin" type='tel' placeholder="휴대폰번호('-' 제외)" value ={inputTel} onChange={onChangeTel} onKeyUp={f_enter}/>
                </div>
                {/* <div className="session">
                    <p className="joinTitle">생년월일</p>
                    <input className="inputJoin" type={'date'} value={inputBirth} onChange={onChangeBirth}/>
                </div>  */}
                <div className="session">
                    {(isId && isPw && isConPw && isName && isNickname && isMail && isTel)}
                    <button className="doJoin" onClick={onClickJoin}>가입하기</button>
                </div>
            </ContainerJoin>
        </> 
    );
};

export default Join;
