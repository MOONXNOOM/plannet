import styled from "styled-components";
import img1 from "../images/logoPic.png";
import "../App";
import { Link } from "react-router-dom";
import "./Main.css";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    border: 1px solid none;
    margin: 0;
    padding: 0;
    display:flex ;
    justify-content:center;
    align-items: center;
`;
const LeftMain = styled.div`
    display: flex;
    width: 50%;
    height: 90vh;
    /* border: 1px solid none; */
    box-sizing: border-box;
    margin: 0 auto;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Logo = styled.div`
    font-family: 'Comfortaa', cursive;
    font-size: 70px;
    font-weight: bold;
    color: #4555AE;
`;
const SubLogo = styled.div`
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 30px;
    font-weight: 600;
    color: #4555AE;
`;
const RightMain = styled.div`
    background-color: #4555AE;
    width: 50%;
    height: 90vh;
    border: 1px solid none;
    margin: auto;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-weight: bold;
`;
const Title = styled.h1`
    font-size: 25px;
    text-align: left;
    width: 350px;
    color: white;
`;
const SemiTitle = styled.h1`
    font-size: 15px;
    text-align: left;
    width: 350px;
    line-height: 20px;
    color: white;
`;
const ExMain = () => {
    return(
        <div className="ex">
            <Container>
                <LeftMain>
                    <img src={img1} alt="Logo" />
                    <Logo>Plannet</Logo>
                    <SubLogo>let's plan it</SubLogo>
                </LeftMain>
                <RightMain>
                    <Title>Plannet</Title>
                    <br/>
                    <SemiTitle>Let's plan it!
                        <br/>오늘의 끝에서 내일을 계획하다
                        <br/>저희는 하루의 일정을
                        <br/>계획하여 성취하도록 도우며
                        <br/>하루의 끝에서 오늘의 하루를 돌아보며
                        <br/>하루를 정리 할 수 있는 플래너 입니다.
                        <br/>오늘 느낌 강점을 소소하게 적어보세요
                        <br/>내일의 일정 또한 완벽하게 작성 할 수 있을것 입니다
                        <br/>
                        <br/>
                    </SemiTitle>
                    <Link to="/doLogin" className="doLogin">로그인하기</Link>
                    <Link to="/join" className="doLogin">회원가입</Link>
                    
                </RightMain>
            </Container>
        </div>
    );
}
export default ExMain;      