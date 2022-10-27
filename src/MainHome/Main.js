import styled from "styled-components";
import {ReactComponent as LogoImg} from "../images/planet-001.svg";
import "../App";
import { Link } from "react-router-dom";
import "./Main.css";

const Container = styled.div`
    width: 100%;
    height: 98vh;
    border: 1px solid none;
    margin: 0;
    padding: 0;
    display:flex ;
    justify-content:center;
    align-items: center;
`;
const LeftMain = styled.div`
    background-color: white;
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    div.wrap{
        width: 350px;
        height: 300px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        right: 70px;
        top: 50%;
        margin-top: -150px;        
    }
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
    /* font-weight: 600; */
    color: #4555AE;
`;
const RightMain = styled.div`
    background-color: #4555AE;
    width: 50%;
    height: 100%;
    border: 1px solid none;
    margin: auto;
    display: flex;
    text-align: center;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-weight: bold;
    div{
        margin: 20px 0;
    }
    h1, h2, div, a{
        margin-left: 70px;
    }
`;
const Title = styled.h1`
    font-size: 28px;
    text-align: left;
    width: 350px;
    color: white;
    font-weight: 900;
`;
const SemiTitle = styled.h2`
    font-size: 16px;
    text-align: left;
    width: 350px;
    line-height: 20px;
    color: white;
`;
const Explain = styled.div`
    width: 350px;
    white-space: pre-line;
    text-align: left;
    color: white;
    font-weight: 400;
    line-height: 1.3;
`;

const ExMain = () => {
    return(
        <div className="ex">
            <Container>
                <LeftMain>
                    <div className="wrap">
                        <LogoImg width="200px" height="150px" />
                        <Logo>Plannet</Logo>
                        <SubLogo>let's plan it</SubLogo>
                    </div>
                </LeftMain>
                <RightMain>
                    <Title>Plannet</Title>
                    <SemiTitle>Let's plan it!</SemiTitle>
                        <Explain>오늘의 끝에서 내일을 계획하다.
                            <br/> 저희는 하루의 일정을
                            <br/> 계획하여 성취하도록 도우며
                            <br/> 하루의 끝에서 오늘의 하루를 돌아보며
                            <br/> 하루를 정리 할 수 있는 플래너 입니다.
                            <br/> 오늘 느낌 강점을 소소하게 적어보세요
                            <br/> 내일의 일정 또한 완벽하게 작성 할 수 있을 것입니다.
                        </Explain>
                    <Link to="/doLogin" className="doLogin">로그인하기</Link>
                    <Link to="/join" className="doLogin">회원가입</Link>
                </RightMain>
            </Container>
        </div>
    );
}
export default ExMain;      