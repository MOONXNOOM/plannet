import "./Join.css"
import img1 from "../images/logoPic.png";
import "../App";
import styled from "styled-components";
const ContainerJoin = styled.div`
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
const SubCon = styled.div`
    width: 350px;
`;

const Join = () => {
    return(
        <ContainerJoin>
            <div className="login-logo"><img src={img1} alt="Logo" width={'90px'} height={'70px'}/><Logo>Plannet</Logo></div>
            <SubCon>
                <p className="joinTitle">아이디</p>
                <input className="inputJoin" type={'text'}/>
            </SubCon> 
            <SubCon>
                <p className="joinTitle">비밀번호</p>
                <input className="inputJoin" type={'password'}/>
            </SubCon> 
            <SubCon>
                <p className="joinTitle">비밀번호 확인</p>
                <input className="inputJoin" type={'password'}/>
            </SubCon>  
            <SubCon>
                <p className="joinTitle">전화번호</p>
                <input className="inputJoin" type={'tel'}/>
            </SubCon> 
            <SubCon>
                <p className="joinTitle">생년월일</p>
                <input className="inputJoin" type={'date'}/>
            </SubCon> 
        </ContainerJoin>
    );
};
export default Join;