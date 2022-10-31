import {ReactComponent as LogoImg} from "../Images/planet-001.svg";
import kakaoimg from "../Images/kakaotalk_logo2.png";
import naverimg from "../Images/btnG_아이콘사각.png";
import googleimg1 from "../Images/google-logo.png";
import styled from "styled-components";
import "./doLogin.scss"
import "../App";
import Api from "../api/plannetApi";
import React, {useState } from 'react';
import Modal from '../Utill/Modal';
import { Link } from "react-router-dom";

const ContainerLogin = styled.div`
    width: 100%;
    height: 90vh;
    margin: 0;
    padding: 0;
    display:flex ;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`;
const Logo = styled.div`
    a{
        font-size: 67px;
        font-family: 'Comfortaa', cursive;
        font-weight: bold;
        color: #4555AE;
    }
`;


const DoLogin = () => {
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    
    // 오류 메시지
    const [idMessage, setIdMessage] = useState("");
    const [pwMessage, setPwMessage] = useState("");

     // 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
         setModalOpen(true);
    };
    // 유효성 검사
    const [isId, setIsId] = useState("");
    const [isPw, setIsPw] = useState("");
    const [isLink, setLink] = useState(false);
    // const [isLogin, setLogin] = useState(false);
    const [comment, setCommnet] = useState("");


const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");
//   const [modalOpen, setModalOpen] = useState(false);

//   const closeModal = () => {
//     setModalOpen(false);
// };

  const confirmModal = async() => {
    setModalOpen(false);
    const memberReg = await Api.memberDelete(localId);
    console.log(memberReg.data.result);
    if(memberReg.data.result === "OK") {
        window.location.replace("/");
    }
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
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setInputPw(passwordCurrent)
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!')
            setIsPw(false)
        } else {
            setPwMessage('안전한 비밀번호에요 : )')
            setIsPw(true);
        }        
    }


    
    const onClickLink = () => {
       setModalOpen(true);
       setLink(true);
       setCommnet("서비스 준비중 입니다 ...");
       console.log("서비스 준비중...");
    }
    const closeModal = () => {
        setModalOpen(false);
        setLink(false);
        // setLogin(false);

    };
    const onClickLogin = async() => {
        try {
            // 로그인을 위한 axios 호출
            const res = await Api.userLogin(inputId, inputPw);
            console.log(res.data.result);
            setCommnet("아이디 또는 비밀번호가 정확하지 않습니다.");
           
            if(res.data.result === "OK") {
                window.localStorage.setItem("userId", inputId);
                window.localStorage.setItem("userPw", inputPw);
                window.location.replace("/");
            } else {
                setModalOpen(true);
                // setLogin(true);
            }
            
        } catch (e) {
            setModalOpen(true);
            // setLogin(true);
            console.log("로그인 에러..");
        }
    }
    
    return (
        <div>
            <ContainerLogin>
                <Logo><LogoImg width="90px" viewBox="30 150 430 220"/><Link to="/main" className="logo">Plannet</Link></Logo>
                <div className="login">
                    <button className="login-btn1" onClick={onClickLink}>
                        <img src={kakaoimg} alt="카카오로고" className="logImg"/>
                        카카오톡으로 로그인
                    </button>
                    <button className="login-btn2" onClick={onClickLink}>
                        <img src={googleimg1} alt="구글로고" className="logImg"/>
                        구글로 로그인
                        </button>
                    <button className="login-btn3" onClick={onClickLink}>
                        <img src={naverimg} alt="네이버로고" className="logImg"/>
                        네이버로 로그인
                    </button>
                </div>
                <p className="space-or">또는</p>
                <div className="login2">
                    <input type="text" id="id" name="uid" placeholder="아이디" required="" value ={inputId} onChange={onChangId}/>
                    <input type="password" id="pwd" name="upw" placeholder="비밀번호" required="" value ={inputPw} onChange={onChangePw}/>
                    <button className="doLogin" onClick={onClickLogin}>로그인하기</button>
                    <Modal open={modalOpen} close={closeModal} header="오류">아이디 및 패스워드를 재확인해 주세요.</Modal>

                    {/* <input type="password" id="pwd" name="upw" placeholder="비밀번호" required="" className="mainlogin" value ={inputPw} onChange={onChangePw} onKeyUp={f_enter}/>
                    <button className="doLogin" onClick={onClickLogin} >로그인하기</button> */}

                    
                    
                </div>
                <div className="else">
                    <Link to="/join" className="join">회원가입</Link>
                    <button className="find">아이디 / 비밀번호 찾기</button>
                </div>   
                {<Modal open={modalOpen} close={closeModal} header="오류">{comment}</Modal>}     
            </ContainerLogin>
        </div>
    );
};
export default DoLogin;