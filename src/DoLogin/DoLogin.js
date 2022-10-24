import img1 from "../images/logoPic.png";
import kakaoimg from "../images/kakaotalk_logo2.png";
import naverimg from "../images/btnG_아이콘사각.png";
import googleimg1 from "../images/google-logo.png";
import styled from "styled-components";
import "./doLogin.css"
import "../App";

const ContainerLogin = styled.div`
    width: 1120px;
    height: 630px;
    border: 1px solid black;
    margin: 10px;
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
    <div>
        <ContainerLogin>
            <div className="login-logo"><img src={img1} alt="Logo" width={'90px'} height={'70px'}/><Logo>Plannet</Logo></div>
            <div className="login">
                <button className="login-btn1">
                    <img src={kakaoimg} alt="카카오로고" className="logImg"/>
                    카카오톡으로 로그인
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
                <input type="email" id="id" name="uid" placeholder="이메일 주소" required="" className="mainlogin" />
                <input type="password" id="pwd" name="upw" placeholder="비밀번호" required="" className="mainlogin"/>
                <button className="doLogin">로그인하기</button>
            </div>
            <div className="else">
                <button className="join">회원가입</button>
                <button className="find">아이디 / 비밀번호 찾기</button>
            </div>        
        </ContainerLogin>
    </div>
 
};
export default DoLogin;