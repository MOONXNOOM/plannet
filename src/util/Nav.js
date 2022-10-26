import { Link } from "react-router-dom";
import styled from "styled-components"
import {ReactComponent as Logo} from "../images/planet-001.svg";

const Nav = () => {
    const userSrc = "https://images.unsplash.com/photo-1666473574427-253b43283677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
    const useImg = {backgroundImage: "url(" + userSrc + ")"};
    const userName = "사용자";
    const userId = "youngja";
    const userPro = ["개발하는 사용자의 플래닛", "#개발자", "#백엔드", "#프론드엔드"];
    const userEmail = "yongja@gmail.com";
    const userPhone = "010-0000-0000";
    const userSNS = "@yongja";
    const pes = {width: '85%'};

    const Box = styled.div`
        width: 280px;
        height: 100vh;
        background-color: aliceblue;
        float: left;
        overflow: hidden;
        text-align: center;        
        .logo{
            width: 100%;
            height: 100px;
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
            padding-top: 80px;
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
                height: 350px;
                padding: 25px 0 10px;
            }
            .userPro2{
                p{font-size: 11px;
                color: #888;}
            }
            .userImgBox{
                width: 180px;
                height: 180px;
                border-radius: 100%;
                overflow: hidden;
                margin: 0 auto;
                background-size: cover;
            }
            .menu{
                width: 208px;
                height: 50px;
                margin: 0 auto;
                li{
                    float: left;
                    a{padding: 0px 10px; line-height:50px; border-left: 1px solid #555; font-weight: 600;}
                }
                li:first-child a{border-left: none;
                }
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
                    }
                }
            }
        }
    `;

    const proPrint = (e) => {
        const result = [];
        for(let i = 0; i < e.length; i++) {
            result.push(<p ket={i}>{e[i]}</p>);
        }
        return result;
    }

    return (
        <Box>
            <div className="logo">
                <Logo/>
                <h1>plannet</h1>
                <h2>Let's plan it!</h2>
            </div>
            <div className="userinfo">
                <div className="userImgBox" style={useImg}/>
                <p className="userName">{userName}</p>
                <p className="userId">&#40;{userId}&#41;</p>
                <div className="userPro1">{proPrint(userPro)}</div>
                <div className="pes">
                    <p>달성률</p>
                    <div className="chartBackground">
                        <div className="chartBar" style={pes}>{pes.width}</div>
                    </div>
                </div>
                <div className="userPro2">
                    <p>Email : {userEmail}</p>
                    <p>Phone : {userPhone}</p>
                    <p>SNS : {userSNS}</p>
                </div>
                <ul className="menu">
                    <li><Link to="/Write">마이페이지</Link></li>
                    <li><Link to="/Board">자유게시판</Link></li>
                    <li><Link to="/Write">설정</Link></li>
                </ul>
            </div>
        </Box>
    );
}
export default Nav;