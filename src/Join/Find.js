import { useState } from "react"
import styled from "styled-components";
import {ReactComponent as LogoImg} from "../Images/planet-001.svg";
import "../App";
import { Link } from "react-router-dom";
import plannetApi from "../api/plannetApi";

const ContainerJoin = styled.div`
    width: 100%;
    height: 90vh;
    margin: 0;
    padding: 0;
    display:flex ;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`;

const Logo = styled.div`
    a{
        font-size: 67px;
        font-family: 'Comfortaa', cursive;
        font-weight: bold;
        color: #4555AE;
    }
`;

const Find = () =>{
    const [findInId,setFindInId] = useState("");
    const [findInName,setFindInName] = useState("");
    const [findInTel,setFindInTel] = useState("");
    const [isFindId,setIsFindId] = useState(false);
    const [isFindPwd,setIsFindPwd] = useState(false);

    const [comment, setComment] = useState("");
    
    const onChangeName = (e) => {
        setFindInName(e.target.value);
    }
    const onChangeId = (e) => {
        setFindInId(e.target.value);
    }
    const onChangeTel = (e) => {
        setFindInTel(e.target.value);
    }
    const onClickId = () => {
        setIsFindId(true);
        setIsFindPwd(false);
    }
    const onClickPwd = () => {
        setIsFindPwd(true);
        setIsFindId(false);
    }

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
         setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const onClickFindId = async() => {

        try{
            const res = await plannetApi.memberFindId(findInName,findInTel);
            console.log(res.data.result);
            if(res.data.result === "OK"){
                setModalOpen(true);
                setComment("아이디 : "+res.data.result.id);
            }
            else {
                setModalOpen(true);
                setComment("가입되어 있는 정보가 없습니다.")
            }
        }catch(e){
            console.log("아이디 찾기 불가")
        }

    }
    const onClickFindPwd = async() => {
        
        try{
            const res = await plannetApi.memberFindPwd()
        }catch(e){
            console.log("비밀번호 찾기 불가")
        }

    }

    return (
        <ContainerJoin>
            <Logo><LogoImg width="90px" viewBox="30 150 430 220"/><Link to="/main" className="logo">Plannet</Link></Logo>
            <div>
                <button className="FindId" onClick={onClickId}>아이디 찾기</button>
                {isFindId&&<p>
                    이름을 입력하세요 <br/>
                    <input onChange={onChangeName}></input><button>확인</button>
                </p>}
                {isFindId&&<p>
                    전화번호를 입력하세요 <br/>   
                    <input onChange={onChangeTel}></input><button>확인</button>
                </p>} 
            </div>
            <div>
                <button className="FindPwd" onClick={onClickPwd}>비밀번호 찾기</button>
                {isFindPwd&&<p>
                    아이디를 입력하세요 <br/>
                    <input onChange={onChangeId}></input><button>확인</button>
                </p>}
                {isFindPwd&&<p>
                    전화번호를 입력하세요 <br/>   
                    <input onChange={onChangeTel}></input><button>확인</button>
                </p>}
            </div>
        </ContainerJoin>
    );
}
export default Find;