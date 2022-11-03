import { Link } from "react-router-dom";
import styled from "styled-components"
import {ReactComponent as Logo} from "../Images/planet-001.svg";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import Api from "../api/plannetApi";

const Box = styled.div`
    width: 280px;
    height: 100vh;
    background-color: #e8f0fe;
    float: left;
    text-align: center;        
    .logo{
        width: 100%;
        height: 140px;
        cursor: pointer;
        h1{
            font-family: 'Comfortaa';
            font-size: 24px;
            line-height: 24px;
            letter-spacing: 2px;
        }
        h2{
            font-family: 'Montserrat Alternates';
            font-size: 12px;
            line-height: 15px;
        }
    }
    .userinfo{
        padding-top: 30px;
        .userName{
            margin-top: 15px;
            font-size: 16px;
            font-weight: 800;
            padding: 3px;
        }
        .userId{
            font-weight: 300;
            font-size: 12px;
        }
        .userPro1{
            height: calc(80vh - 420px);
            margin: 20px 0;
            padding-left:17px;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 20px;
                padding: 15px;
            }
            &::-webkit-scrollbar-thumb {
                height: 30%; /* 스크롤바의 길이 */
                background: #ddd; /* 스크롤바의 색상 */
                border-radius: 10px;
                border: 7px solid transparent;
                background-clip: padding-box;
            }
            &::-webkit-scrollbar-track {
                background: none;
                /*스크롤바 뒷 배경 색상*/
            }
        }
        .userPro2{
            p{font-size: 11px;
            color: #888;}
        }
        .userImgBox{
            height: 20vh;
            aspect-ratio: auto 1 / 1;
            border-radius: 100%;
            overflow: hidden;
            margin: 0 auto;
            background-size: cover;
        }
        .menu{
            width: 208px;
            width: 253px;
            height: 50px;
            margin: 0 auto;
            li{
                float: left;
                a, span{
                    padding: 0px 7px; 
                    line-height:50px; 
                    border-left: 1px solid #555; 
                    font-weight: 600; 
                    cursor: pointer;}
            }
            li:first-child a{border-left: none;}
        }
        .pes{
            clear: both;
            .chartBackground{
                width: 75%;
                height: 12px;
                background-color: #dfdfdf;
                margin: 0 auto;
                border-radius: 15px;
                position: relative;
                margin-bottom: 15px;
                .chartBar{
                    height: 12px;
                    position: absolute;
                    left: 0;
                    background-color: #4555AE;
                    border-radius: 15px;
                    color: white;
                    text-align: right;
                    font-size: 12px;
                    padding-right: 10px;
                    line-height: 12px;
                    text-shadow: 1px 1px 1px #555;
                }
            }
        }
    }
`;

const Nav = () => {
    const userId = window.localStorage.getItem("userId");
    const [userSrc, setUserSrc] = useState("https://images.unsplash.com/photo-1666473574427-253b43283677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
    const useImg = {backgroundImage: "url(" + userSrc + ")"};
    const [userNickname, setUserNickname] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userSNS, setUserSNS] = useState("");
    const [userPro, setUserPro] = useState("");
    const [num, setNum] = useState('0');
    const pes = {width: num+'%'};

    useEffect(() => {
        const userInfoLoad = async() => {
            try{
                const response = await Api.userInfoLoad(userId);
                setUserNickname(response.data[0].nickname);
                setUserEmail(response.data[0].email);
                setUserPhone(response.data[0].phone);
                setUserSNS(response.data[0].sns);
                setUserPro(response.data[0].profile);
                const resNum = await Api.userDo(userId);
                setNum(resNum.data.pes);
            } catch(e){
                console.log(e);
            }
        }
        userInfoLoad();
    },[userId]);

    // 로그아웃 팝업
    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    const onClickBtn = () => {
        setModalOpen(true);
        setCommnet("로그아웃 하시겠습니까?");
    }

    // 로고 클릭시 홈으로
    const onClickLogo = () => {
        window.location.assign("/home");
    }

    //유저정보가져오기
    const logoStyle = {
    fill:
  "linear-gradient(217deg, rgb(0, 82, 212, .8), rgba(255,0,0,0) 70.71%), linear-gradient(127deg, rgb(66, 99, 247, .8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgb(111, 177, 252, .8), rgba(0,0,255,0) 70.71%)"};

    return (
        <Box>
            <div className="logo" onClick={onClickLogo}>
                <Logo style={logoStyle}/>
                <h1>plannet</h1>
                <h2>Let's plan it!</h2>
            </div>
            <div className="userinfo">
                <div className="userImgBox" style={useImg}/>
                <p className="userName">{userNickname}</p>
                <p className="userId">&#40;{userId}&#41;</p>
                <div className="userPro1">{userPro}</div>
                <div className="pes">
                    <p>달성률</p>
                    <div className="chartBackground">
                        <div className="chartBar" style={pes}>{pes.width}</div>
                    </div>
                </div>
                <div className="userPro2">
                    <p>Email : {userEmail}</p>
                    <p>Phone : {userPhone}</p>
                    {userSNS? <p>SNS : @{userSNS}</p> : <p>SNS : - </p> }
                </div>
                <ul className="menu">
                    <li><Link to="/home">마이페이지</Link></li>
                    <li><Link to="/board">자유게시판</Link></li>
                    <li onClick={onClickBtn}><span>로그아웃</span></li>
                    <Modal open={modalOpen} close={closeModal} header="안내">{comment}</Modal>
                    <li><Link to="/setting">설정</Link></li>
                </ul>
            </div>
        </Box>
    );
}
export default Nav;