import React from 'react';
import Nav from '../Utill/Nav';
import styled from 'styled-components';
import Calendar from './Calendar';
import Memo from './Memo';
import List from './List';
import Quote from './Quote';


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
        background-color: #f9f9f9;
        width: 100%;
        height: 450px;
        border-radius: 5px;
        overflow: hidden;

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

const Home = () => {
  return (
    <Wrap>
      <Nav />
      <Section>
        <div className="plan">
          <h2>Plan it</h2>
          <Calendar/>
        </div>
        <div className='etc'>
          <div className='memo'>
            <h2>Memo</h2>
            <Memo/>
          </div>
          <div className='moti'>
            <h2>Motivation</h2>
            <Quote/>
          </div>
        </div>
        <div className="list">
          <h2>List</h2>
          <div className="history" >
                </div>
          <List />
        </div>
      </Section>
      <div className="copy">&#169; Plannet.</div>
    </Wrap>
  );
}
export default Home;
