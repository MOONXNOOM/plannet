import "./Join.css"
import img1 from "../images/logoPic.png";
import "../App";
import styled from "styled-components";
const ContainerJoin = styled.div`
    height: 90vh;
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


const Join = () => {
    return(
        <>
            <ContainerJoin>
                <div className="login-logo"><img src={img1} alt="Logo" width={'90px'} height={'70px'}/><Logo>Plannet</Logo></div>
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
                    <p className="joinTitle">전화번호</p>
                    <input className="inputJoin" type={'tel'}/>
                </div> 
                <div className="session">
                    <p className="joinTitle">생년월일</p>
                    <input className="inputJoin" type={'date'}/>
                </div> 
            </ContainerJoin>
        </>
        
    );
};
export default Join;