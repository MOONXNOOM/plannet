import "./Join.css"
import img1 from "../images/logoPic.png";
import "../App";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    return(
        <>
            <ContainerJoin>
                <div className="login-logo"><img src={img1} alt="Logo" width={'90px'} height={'70px'}/>
                <Logo><Link to="/main" className="logo">Plannet</Link></Logo></div>
                <div className="session">
                    <p className="joinTitle">아이디</p>
                    <input className="inputJoin" type={'text'}/>
                </div> 
                <div className="session">
                    <p className="joinTitle">비밀번호</p>
                    <input className="inputJoin" type={'password'}/>
                </div> 
                <div className="session"n>
                    <p className="joinTitle">비밀번호 확인</p>
                    <input className="inputJoin" type={'password'}/>
                </div>  
                <div className="session">
                    <p className="joinTitle">이름</p>
                    <input className="inputJoin" type={'text'}/>
                </div>
                <div className="session">
                    <p className="joinTitle">닉네임</p>
                    <input className="inputJoin" type={'text'}/>
                </div>
                <div className="session">
                    <p className="joinTitle">이메일</p>
                    <input className="inputJoin" type={'email'}/>
                </div>
                <div className="session">
                    <p className="joinTitle">전화번호</p>
                    <input className="inputJoin" type={'tel'}/>
                </div>
                <div className="session">
                    <p className="joinTitle">생년월일</p>
                    <input className="inputJoin" type={'date'}/>
                </div> 
                <div className="session">
                    <button className="doJoin">가입하기</button>
                </div>
            </ContainerJoin>
        </>
        
    );
};
export default Join;