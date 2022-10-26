import img1 from "../images/logoPic.png";
import kakaoimg from "../images/kakaotalk_logo2.png";
import naverimg from "../images/btnG_아이콘사각.png";
import googleimg1 from "../images/google-logo.png";
import styled from "styled-components";
import "./DoLogin.css"
import "../App";
import Api from "../api/plannetApi";
import React, {useState } from 'react';
import Modal from '../util/Modal';
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
    font-family: 'Comfortaa', cursive;
    font-size: 70px;
    font-weight: bold;
    color: #4555AE;
`;


const DoLogin = () => {
    // 키보드 입력
    const [inputId, setInputId] = useState("");
    const [inputPw, setInputPw] = useState("");
    
     // 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
         setModalOpen(true);
    };
    const closeModal = () => {
         setModalOpen(false);
    };
    const onClickLogin = async() => {
        try {
            // 로그인을 위한 axios 호출
            const res = await Api.userLogin(inputId, inputPw);
            console.log(res.data.result);
           
            if(res.data.result === "OK") {
                window.localStorage.setItem("userId", inputId);
                window.localStorage.setItem("userPw", inputPw);
                window.location.replace("/");
            } else {
                setModalOpen(true);
            }
            
        } catch (e) {
            setModalOpen(true);
            console.log("로그인 에러..");
        }
    }
    
    return (
        <div>
            <ContainerLogin>
                <div className="login-logo"><img src={img1} alt="Logo" width={'90px'} height={'70px'}/>
                <Logo><Link to="/main" className="logo">Plannet</Link></Logo></div>
                <div className="login">
                    <button className="login-btn1">
                        <img src={kakaoimg} alt="카카오로고" className="logImg"/>
                        카카오톡으로 로그인
                        <Modal open={modalOpen} close={closeModal} header="오류">서비스 준비중...</Modal>
                    </button>
                    <button className="login-btn2">
                        <img src={googleimg1} alt="구글로고" className="logImg"/>
                        구글로 로그인
                        </button>
                    <button className="login-btn3">
                        <img src={naverimg} alt="네이버로고" className="logImg"/>
                        네이버로 로그인
                    </button>
                </div>
                <p className="space-or">또는</p>
                <div className="login2">
                    <input type="text" id="id" name="uid" placeholder="아이디" required="" className="mainlogin" />
                    <input type="password" id="pwd" name="upw" placeholder="비밀번호" required="" className="mainlogin"/>
                    <button className="doLogin" onClick={onClickLogin}>로그인하기</button>
                    <Modal open={modalOpen} close={closeModal} header="오류">아이디 및 패스워드를 재확인해 주세요.</Modal>
                </div>
                <div className="else">
                    <Link to="/join" className="join">회원가입</Link>
                    <button className="find">아이디 / 비밀번호 찾기</button>
                </div>        
            </ContainerLogin>
        </div>
    );
};
export default DoLogin;