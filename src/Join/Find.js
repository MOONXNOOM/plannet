import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../Images/planet-001.svg";
import Api from "../api/plannetApi";
import Modal from "../Utill/Modal";
import "./Join.scss"
import "../App";

const ContainerJoin = styled.div`
    height: 100vh;
    display:flex ;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    background-color: white;
`;
const Logo = styled.div`
    margin-top: -30px;
    a {
        font-family: 'Comfortaa', cursive;
        font-size: 67px;
        font-weight: bold;
        color: #4555AE;
    }
`;

const Find = () =>{
    const [findInName,setFindInName] = useState("");
    const [findInId,setFindInId] = useState("");
    const [findInEmail,setFindInEmail] = useState("");

    const [isFindId,setIsFindId] = useState(true);
    const [isFindPwd,setIsFindPwd] = useState(false);

    const [emailMessage, setEmailMessage] = useState("");
    const [isEmail, setIsEmail] = useState(false);

    // 아이디와 이메일이 맞으면 새로운 비밀번호를 지정할 수 있는 html을 불러옴
    const [isNewPwd, setIsNewPwd] = useState(false); 

    //새로 설정한 비밀번호가 정규식이 맞는 지/비밀번호와 비밀번호 확인이 동일한지 검사
    const [isnewPwdCheck, setIsNewPwdCheck] = useState(false);
    const [isnewPwdConCheck, setIsNewPwdConCheck] = useState(false);

    //새로운 비밀번호/비밀번호 확인 값
    const [newPwd, setNewPwd] = useState("");
    const [newPwdCon, setNewPwdCon] = useState("");

    //확인 문구
    const [pwMessage, setPwMessage] = useState("");
    const [conPwMessage, setConPwMessage] = useState("");
    
    const onChangeName = (e) => {
        setFindInName(e.target.value);
    }

    const onChangeId = (e) => {
        setFindInId(e.target.value);
    }

    //이메일 정규식
    const onChangeEmail = (e) => {
        const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        const emailCurrent = e.target.value ;
        setFindInEmail(emailCurrent);
        if(!emailRegex.test(emailCurrent)){
            setEmailMessage('이메일의 형식이 올바르지 않습니다.')
            setIsEmail(false);
        } else {
            setEmailMessage('이메일의 형식이 올바르게 입력되었습니다.')
            setIsEmail(true);
        }
    }

    //비밀번호 정규식
    const onChangePw = (e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/
        const passwordCurrent = e.target.value ;
        setNewPwd(passwordCurrent);
        if (!passwordRegex.test(passwordCurrent)) {
            setPwMessage('숫자+영문자 조합으로 8자리 이상 입력해 주세요.')
            setIsNewPwdCheck(false)
        } else {
            setPwMessage('안전한 비밀번호에요 :)')
            setIsNewPwdCheck(true);
        }
        if (passwordCurrent !== newPwdCon) {
            setConPwMessage('비밀번호가 일치하지 않습니다.')
            setIsNewPwdConCheck(false)   
        }
    }

    // 비밀번호 확인 체크
    const onChangeConPw = (e) => {
        const passwordCurrent = e.target.value ;
        setNewPwdCon(passwordCurrent)
        if (passwordCurrent !== newPwd) {
            setConPwMessage('비밀번호가 일치하지 않습니다.')
            setIsNewPwdConCheck(false)
        } else {
            setConPwMessage('비밀번호가 일치 합니다. :)')
            setIsNewPwdConCheck(true);
        }      
    }

    // 아이디/비밀번호 찾기 전환
    const onClickId = () => {
        setIsFindId(true);
        setIsFindPwd(false);
    }
    const onClickPwd = () => {
        setIsFindId(false);
        setIsFindPwd(true);
    }

    // 찾기 팝업
    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [header, setHeader] = useState("");

    const closeModal = () => {
        setModalOpen(false);
    };   

    const onClickFindId = async() => {
        const res = await Api.memberFind(findInName, findInEmail, "Type_ID");
        if(res.data[0].result === "OK"){
            setModalOpen(true);
            setHeader("로그인");
            setComment("아이디는 ["+ res.data[0].id + "] 입니다.");
        }
        else {
            setModalOpen(true);
            setComment("가입되어 있는 정보가 없습니다.")
        }
    }
    const onKeyDownFindId = (e) => {
        if(e.key === 'Enter'){
            onClickFindId();
        }
    }

    const onClickFindPwd = async() => {
        const res = await Api.memberFind(findInId, findInEmail, "Type_PWD");
        if(res.data[0].result === "OK"){
            setModalOpen(true);
            setHeader("");
            setComment("새로운 비밀번호를 설정합니다.");
            setIsNewPwd(true);
        }
        else {
            setModalOpen(true);
            setComment("가입되어 있는 정보가 없습니다.")
        }
    }
    const onKeyDownFindPwd = (e) => {
        if(e.key === 'Enter'){
            onClickFindPwd();
        }
    }

    const onClickNewPwd = async() => {
        const res = await Api.memberNewPwd(findInId, newPwdCon);
        if(res.data.result === "OK"){
            setIsNewPwd(false);
            setModalOpen(true);
            setHeader("로그인");
            setComment("비밀번호가 재설정되었습니다. 로그인해주세요.");
        }
    }
    const onKeyDownNewPwd = (e) => {
        if(e.key === 'Enter'){
            onClickNewPwd();
        }
    }

    return (
        <ContainerJoin>
            <Modal open={modalOpen} close={closeModal} header={header}>{comment}</Modal>
            <Logo><LogoImg width="90px" viewBox="30 150 430 220"/><Link to="/" className="logo">Plannet</Link></Logo>
            <div>
                <div className={`findBtn ${isFindId ? 'findActive' : ''}`} onClick={onClickId}>아이디 찾기</div>
                <div className={`findBtn ${isFindPwd ? 'findActive' : ''}`} onClick={onClickPwd}>비밀번호 찾기</div>
                {isFindId ?
                    <div className="session">
                        <p>
                            이름<br/>
                            <input placeholder="이름" onChange={onChangeName} value={findInName}></input>
                        </p>
                        <p>
                            이메일{findInEmail.length > 0 && <span>{emailMessage}</span>}<br/>
                            <input placeholder="이메일" onChange={onChangeEmail} value={findInEmail} onKeyDown={onKeyDownFindId}></input>
                        </p>
                        <button disabled={!(findInName && isEmail)} onClick={onClickFindId}>찾기</button>
                    </div> :
                    <div className="session">
                        {!isNewPwd? 
                            <>
                            {/* 비밀번호 찾기 */}
                                <p>
                                    아이디<br/>
                                    <input placeholder="아이디" onChange={onChangeId} value={findInId}></input>
                                </p>
                                <p>
                                    이메일{findInEmail.length > 0 && <span>{emailMessage}</span>}<br/>   
                                    <input placeholder="이메일" onChange={onChangeEmail} value={findInEmail} onKeyDown={onKeyDownFindPwd}></input>
                                </p>
                                <button disabled={!(findInId && isEmail)} onClick={onClickFindPwd}>찾기</button>
                            </> : 
                            <>
                            {/* 새로운 비밀번호 설정 */}
                                <p className="newPwd">
                                    새 비밀번호{newPwd.length > 0 && <span className="newPwd">{pwMessage}</span>}<br/>
                                    <input type="password" placeholder="패스워드" onChange={onChangePw} value={newPwd}></input>
                                </p>
                                <p className="newPwd">
                                    새 비밀번호 확인{newPwdCon.length > 0 && <span>{conPwMessage}</span>}<br/>   
                                    <input type="password" placeholder="패스워드 확인" onChange={onChangeConPw} value={newPwdCon} onKeyDown={onKeyDownNewPwd}></input>
                                </p>
                                <button disabled={!(isnewPwdCheck && isnewPwdConCheck)} onClick={onClickNewPwd}>찾기</button>
                            </>
                        }
                    </div>
                } 
            </div>
        </ContainerJoin>
    );
}

export default Find;