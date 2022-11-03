import { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../Utill/Nav";
import Api from "../api/plannetApi";
import Modal from "../Utill/Modal";

const Wrap = styled.div`
    width: 1130px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
`;
const Section = styled.div`
    width: 850px;
    height: calc(100vh - 40px);
    float: left;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
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
    div{
        width: 100%;
        padding: 10px 30px;
    }
    h2{
      font-size: 28px;
      font-weight: 900;
      margin-top: 35px;
      margin-bottom: 10px;
    }

    .btnbox{
        height: 90px;
        line-height: 70px;
        position: relative;
        height: 50px;
        button.save{
            font-weight: 600;
            display: block;
            position: absolute;
            top: 0;
            right: 30px;
            font-size: 16px;
            padding: 8px 35px;
            border-radius: 25px;
            background-color: #333;
            color: white;
            border: none;
            transition: all .1s ease-in;
            &:hover{
                background-color: #666;
            }
        }        
    }
    .setting{
        .userInfo{
            display:flex ;
            justify-content:center;
            align-items: center;
            flex-direction: column;
            .session{
                width: 410px;
                padding: 5px 30px;
                margin-top: 0;
                p{
                    font-size: 18px;
                    font-weight: 600; 
                    line-height: 18px;
                    margin-bottom: 4px;
                }
                input, textarea{
                    padding: 0 15px;
                    border-radius: 5px;
                    width: 350px;
                    height: 30px;
                    color: #333;
                    background: #e8f0fe;
                    border: none;
                    font-weight: 500;
                    outline: none;
                    &:focus{
                        background-color: #b8b9f1;
                        color: #222;
                    }
                    &:focus::placeholder{
                        color: #888;
                    }
                    &::placeholder{
                        color: #bbb;
                    }
                }
                textarea{
                    padding: 10px 15px;
                    height: 100px;
                    resize: none;
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
            }
        }
        .userImgBox{
            width: 180px;
            height: 180px;
            aspect-ratio: auto 1 / 1;
            border-radius: 100%;
            overflow: hidden;;
            background-size: cover;
            margin: 0 auto;
            position: relative;
            input{display:none;}
            div{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                border-radius: 100%;
                background-color: rgba(0, 0, 0, .15);
                cursor: pointer;
                text-align: center;
                i{
                    font-size: 50px;
                    line-height: 160px;
                    color: rgba(255, 255, 255, .6);
                }
            }
        }
    }
    .withdrawal{
        cursor: pointer;
        text-align: left;
        text-decoration: underline;
        color: #ccc;
    }
    
`;


const Setting = () => {
    const userId = window.localStorage.getItem("userId");
    const [userSrc, setUserSrc] = useState("https://images.unsplash.com/photo-1666473574427-253b43283677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80");
    const useImg = {backgroundImage: "url(" + userSrc + ")"};
    const [userNickname, setUserNickname] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userSNS, setUserSNS] = useState("");
    const [userPro, setUserPro] = useState("");

    useEffect(() => {
        const userInfoLoad = async() => {
            try{
                const response = await Api.userInfoLoad(userId);
                setUserNickname(response.data[0].nickname);
                setUserEmail(response.data[0].email);
                setUserPhone(response.data[0].phone);
                setUserSNS(response.data[0].sns);
                setUserPro(response.data[0].profile);
            } catch(e){
                console.log(e);
            }
        }
        userInfoLoad();
    },[userId]);

    const onClickSave = async() => {
        await Api.userInfoSave(userId, userNickname, userEmail, userPhone, userSNS, userPro);
        window.location.assign("/home");
    }

    const onChangeNickname = (e) => {
        setUserNickname(e.target.value);
    }
    const onChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const onChangePhone = (e) => {
        setUserPhone(e.target.value);
    }
    const onChangeSNS = (e) => {
        setUserSNS(e.target.value);
    }
    const onChangePro = (e) => {
        setUserPro(e.target.value);
    }


    //회원탈퇴 팝업
    const [comment, setCommnet] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };
    const onClickWithdraw = () => {
        setModalOpen(true);
        setCommnet("탈퇴 하시겠습니까?");
    }
    
    return (
        <Wrap>
            <Nav />
            <Section>
                <div className="setting">
                    <h2>Setting</h2>
                    <div className="userImgBox" style={useImg}>
                        <label>
                            <input type="file" accept="image/*"/>
                            <div><i class="bi bi-pencil-fill"></i></div>
                        </label>
                    </div>
                    <div className="userInfo">
                        <div className="session">
                            <p>닉네임</p>
                            <input onChange={onChangeNickname} value={userNickname} placeholder="닉네임"/>
                        </div>
                        <div className="session">
                            <p>이메일</p>
                            <input onChange={onChangeEmail} value={userEmail} placeholder="이메일"/>
                        </div>
                        <div className="session">
                            <p>전화번호</p>
                            <input onChange={onChangePhone} value={userPhone} placeholder="전화번호"/>
                        </div>
                        <div className="session">
                            <p>SNS</p>
                            <input onChange={onChangeSNS} value={userSNS} placeholder="SNS"/>
                        </div>
                        <div className="session">
                            <p>자기소개글</p>
                            <textarea onChange={onChangePro} value={userPro} placeholder="자기소개글" maxlength="100" />
                        </div>
                        <span className="withdrawal" onClick={onClickWithdraw}>회원탈퇴</span>
                        <Modal open={modalOpen} close={closeModal} header="탈퇴">{comment}</Modal>
                    </div>
                </div>
                <div className="btnbox">
                    <button onClick={onClickSave} className="save">SAVE</button>
                </div>
            </Section>
            <div className="copy">&#169; Plannet.</div>
        </Wrap>
    );
}
export default Setting;