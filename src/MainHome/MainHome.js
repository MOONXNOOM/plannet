import React from 'react';
import Nav from '../Utill/Nav';
import styled from 'styled-components';
// import "react-datepicker/dist/react-datepicker.css";
// import Calendar from './Calendar'  
import CalEx from '../MainHome/CalEx';
import Modal from '../Utill/Modal';
import plannetApi from '../api/plannetApi';
import Memo from './Memo';
// import Memo from './Memo';
import List from './List';

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
    .plan, .etc{
      height: 550px;
      float: left;  
      padding: 10px 30px 10px 0;
      h2{
        margin-top: 35px;
      }
    }
    .plan{
      width: 70%;
      padding-left: 30px;
      &>div{
        background-color: rosybrown;
        width: 100%;
        height: 450px;
      }
    }
    .etc{
      width: 30%;
      .moti h2{
          margin-top: 20px;
      }
      textarea{
        width: 100%;
        height: 320px;
        resize: none;
        outline: none;
        padding: 10px;
        background-color: #f9f9f9;
        border-radius: 5px;
        border: 2px solid #f9f9f9;
        transition: all .1s ease-in;
        &::-webkit-scrollbar {
          width: 12px;
        }
        &::-webkit-scrollbar-thumb {
            height: 30%; /* 스크롤바의 길이 */
            background: #ddd; /* 스크롤바의 색상 */
            border-radius: 3px;
            border: 3px solid transparent;
            background-clip: padding-box;
        }
        &::-webkit-scrollbar-track {
            background: none;
            /*스크롤바 뒷 배경 색상*/
        }
        &:focus{
          border: 2px solid #f0f0f0;
        }
      }
    }
    .list{
      width: 100%;
      height: 300px;
      padding: 20px 30px 10px;
      /* background-color: blanchedalmond; */
      clear: both;
    }
    h2{
      font-size: 28px;
      font-weight: 900;
      margin-bottom: 10px;
    }
`;

const MainHome = () => {

  const localId = window.localStorage.getItem("userId");
  const localPw = window.localStorage.getItem("userPw");

  const motivation = "동기부여가 되는 문구가 출력됩니다.";

  return (
    <Wrap>
      <Nav />
      <Section>
        <div className="plan">
          <h2>Plan it</h2>
          <CalEx/>
        </div>
        <div className='etc'>
          <div className='memo'>
            <h2>Memo</h2>
            <Memo/>
          </div>
          <div className='moti'>
            <h2>Motivation</h2>
            <p>{motivation}</p>
          </div>
        </div>
        <div className="list">
          <h2>List</h2>
          <div className="history" >
                   <p>회원 아이디 : {localId}</p>
                   <p>회원 패스워드 : {localPw}</p>
                </div>
          <List />
        </div>
      </Section>
      <div className="copy">&#169; Plannet.</div>
    </Wrap>
  );
}
export default MainHome;
