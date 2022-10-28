import './MainHome.css';
import React from 'react';
import Nav from '../Utill/Nav';
import styled from 'styled-components';
// import "react-datepicker/dist/react-datepicker.css";
// import Calendar from './Calendar'  
import CalEx from '../MainHome/CalEx';

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
    .plan{
      width: 70%;
      height: 70vh;
      background: rosybrown;
      height: 550px;
      &>div{
        background-color: red;
        width: 100%;
        height: 450px;
      }
    }
    .etc{
      width: 30%;
      background-color: royalblue;

    }
    .plan, .etc{
      height: 580px;
      float: left;  
      padding: 10px 30px;
      h2{
        margin-top: 35px;
      }
    }
    .list{
      width: 100%;
      height: 300px;
      padding: 10px 30px;
      background-color: blanchedalmond;
      clear: both;
    }
    h2{
      font-size: 28px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    textarea{
      width: 100%;
      background: blanchedalmond;
    }
`;

const MainHome = () => {
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
            <textarea type='text' className='me' placeholder='메모를 입력하세요'></textarea>
          </div>
          <div className='doing'>
            <h2>Motivation</h2>
            <textarea type='text' className='do' placeholder='동기부여 되는 구문을 작성하세요'></textarea>
          </div>
        </div>
        <div className="list">
          <h2>List</h2>
        </div>
      </Section>
      <div className="copy">&#169; Plannet.</div>
    </Wrap>
  );
}
export default MainHome;
