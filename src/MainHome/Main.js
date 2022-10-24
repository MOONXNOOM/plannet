import styled from "styled-components";
import img1 from "../images/logoPic.png";
// import kakaoimg from "../images/kakaotalk_logo2.png";
// import naverimg from "../images/btnG_아이콘사각.png";
// import googleimg1 from "../images/google-logo.png";
import "../App";
const Container = styled.div`
    width: 1120px;
    height: 630px;
    border: 1px solid black;
    margin: 10px;
    padding: 0;
    display:flex ;
    justify-content:center;
    align-items: center;
`;
const LeftMain = styled.div`
    display: flex;
    width: 560px;
    height: 630px;
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
    width: 560px;
    height: 630px;
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
const Button = styled.button`
    cursor: pointer;
    margin: 5px;
    width: 350px;
    height: 44px;
    border: 3px solid white;
    font-size: 16px;
    background-color: #4555AE ;
    color: white;
    font-weight: 600;
    &:hover{
        color: #4555AE;
        background-color: white;
    }
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
                    <Button>로그인하기</Button>
                    <Button>회원가입</Button>
                </RightMain>
            </Container>
        </div>
    );
}
export default ExMain;      