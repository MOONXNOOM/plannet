import "./Join.css"
import React, { useState } from 'react';
import img1 from "../Images/logoPic.png";
import "../App";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Api from '../Api/PlannetApi';
import Modal from '../util/Modal.js';
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
     const [inputNickName, setInputNickName] = useState(inputName);
     const [inputEmail, setInputEmail] = useState("");
     const [inputTell, setInputTell] = useState("");
     const [inputBirth,setInputBirth] = useState("2000-01-01");
 
     // 오류 메시지
     const [idMessage, setIdMessage] = useState("");
     const [pwMessage, setPwMessage] = useState("");
     const [conPwMessage, setConPwMessage] = useState("");
    //  const [mailMessage, setMailMessage] = useState("");
 
     // 유효성 검사
     const [isId, setIsId] = useState(false);
     const [isPw, setIsPw] = useState(false)
     const [isConPw, setIsConPw] = useState(false);
     const [isName, setIsName] = useState(false);
     const [isNickName, setIsNickName] = useState(false);
     const [isMail, setIsMail] = useState(false);
     const [isTell, setIsTell] = useState(false);
     // 팝업
     const [modalOpen, setModalOpen] = useState(false);
     const [modalText, setModelText] = useState("중복된 아이디 입니다.");
 
     const closeModal = () => {
         setModalOpen(false);
     };
 
     const onChangId = (e) => {
         setInputId(e.target.value)
         if (e.target.value.length < 5 || e.target.value.length > 12) {
             setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
             setIsId(false);    
         } else {
             setIdMessage("올바른 형식 입니다.");
             setIsId(true);
         }
     }
     const onChangePw = (e) => {
         //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
         const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
         const passwordCurrent = e.target.value ;
         setInputPw(passwordCurrent);
         if (!passwordRegex.test(passwordCurrent)) {
             setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해주세요!')
             setIsPw(false)
         } else {
             setPwMessage('안전한 비밀번호에요 : )')
             setIsPw(true);
         }        
     }
 
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
     const onChangeNickName = (e) => {
        // const NickNameCurrnet=e.target.value;
        // if(NickNameCurrnet===null) {
        //     setInputNickName(inputName);
        //     setIsNickName(true);
        // }
        // else {
        //     setInputNickName(e.target.value);
        //     setIsNickName(true);
        // }
        setInputNickName(e.target.value);
        setIsNickName(true);
    }
 
     const onChangeMail = (e) => {
         setInputEmail(e.target.value);
         setIsMail(true);
     }
     const onChangeTell = (e) => {
        setInputTell(e.target.value);
        setIsTell(true);
    }
    //  onChangeBirth 다시 구현
    const onChangeBirth = (e) => {
        const a=setInputBirth(e.target.value);
        console.log(a);
    }

     const onClickLogin = async() => {
        console.log("Click 회원가입");
        // 가입 여부 우선 확인
        const memberCheck = await Api.memberRegCheck(inputId);
        console.log(memberCheck.data.result);
        // 가입 여부 확인 후 가입 절차 진행

        if (memberCheck.data.result === "OK") {
            console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
            const memberReg = await Api.memberReg(inputId, inputPw, inputName, inputEmail);
            console.log(memberReg.data.result);
            if(memberReg.data.result === "OK") {
                window.location.replace("/");
            } else {
                setModalOpen(true);
                setModelText("회원 가입에 실패 했습니다.");
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
                    <input className="inputJoin" placeholder="아이디" value ={inputId} onChange={onChangId} type={'text'}/>
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
                    <input className="inputJoin" type='text' placeholder="닉네임" value ={inputNickName} onChange={onChangeNickName}/>
                </div>
                <div className="session">
                    <p className="joinTitle">이메일</p>
                    <input className="inputJoin" type='email' placeholder="이메일" value ={inputEmail} onChange={onChangeMail}/>
                </div>
                <div className="session">
                    <p className="joinTitle">전화번호</p>
                    <input className="inputJoin" type='tel' placeholder="휴대폰번호" value ={inputTell} onChange={onChangeTell}/>
                </div>
                <div className="session">
                    <p className="joinTitle">생년월일</p>
                    <input className="inputJoin" type={'date'} value={inputBirth} onChange={onChangeBirth}/>
                </div> 
                <div className="session">
                    {/* 위 조건 성립시 넘어가기 구현 및 생년월일 받아오기 해결하기 */}
                    {(isId && isPw && isConPw && isName && isNickName && isMail && isTell)}
                    <button className="doJoin" onClick={onClickLogin}>가입하기</button>
                </div>
            </ContainerJoin>
        </>
        
    );
};
export default Join;