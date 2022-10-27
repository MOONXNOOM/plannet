// import "./LoginHome.css";
import "../App";
import { useState } from "react";
import styled from "styled-components"
import Nav from '../util/Nav';
// import "react-datepicker/dist/react-datepicker.css";
// import Calendar from './Calendar'  

const Wrap = styled.div`
    width: 1130px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
`;
const Section = styled.div`
    width: 850px;
    height: 100vh;
    float: left;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    div{
        width: 100%;
        padding: 10px 30px;
    }
    .calendar {
      h2 {
        font-size: 28px;
        margin-top: 100px;
        font-weight: 900;
      }
    }
    &::-webkit-scrollbar {
        width: 12px;
        padding: 15px;
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #333; /* 스크롤바의 색상 */
        border-radius: 10px;
        border: 3px solid transparent;
        background-clip: padding-box;
    }
`;
 
const LoginHome= () => {
    return (
        <Wrap>
            <Nav />
            <Section>
              <div className="calendar"><h2>Calendar</h2>
              </div>
              
                
            </Section>
        </Wrap>
    );
}
export default LoginHome;