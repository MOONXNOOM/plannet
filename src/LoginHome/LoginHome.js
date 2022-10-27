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
    .moti {
      margin: 0 auto;
      bottom: 333px;
      left: 536px;
      position: relative;
    }
    .calendar {
      h2 {
        font-size: 28px;
        margin-top: 100px;
        font-weight: 900;
      }
    }
    .sub_box{
        h2{
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 900;
        }
    }
    .write_box1{
        padding: 20px;
        width: 100%;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
    .write_box2{
        padding: 20px;
        width: 65%;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
    .write_box3{
        padding: 20px;
        width: 30%;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
    .calendar{
        height: 350px;
        .write_box1{
            height: 280px;
            textarea{
                line-height: 1.4;
                width: 765px;
                height: 240px;
                border: none;
                resize: none;
                background: none;
                overflow-y: scroll;
                &:focus {outline: none;}
                &::-webkit-scrollbar {
                    width: 20px;
                    padding: 15px;
                }
            }
        }
    }
    .list{
        height: 350px;
        margin-top: 130px;
        .write_box2{
            height: 280px;
            textarea{
                line-height: 1.4;
                width: 525px;
                height: 240px;
                border: none;
                resize: none;
                background: none;
                overflow-y: scroll;
                &:focus {outline: none;}
                &::-webkit-scrollbar {
                    width: 20px;
                    padding: 15px;
                }
            }
        }
        .write_box3 {
          height: 280px;
          textarea{
                line-height: 1.4;
                width: 195px;
                height: 240px;
                border: none;
                resize: none;
                background: none;
                overflow-y: scroll;
                &:focus {outline: none;}
                &::-webkit-scrollbar {
                    width: 20px;
                    padding: 15px;
                }
            }
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
    .copy{
        width: 850px;
        position: absolute;
        bottom: 0;
        text-align: center;
        color: #dfdfdf;
        line-height: 50px;
    }
    .btnbox{
        height: 90px;
        line-height: 70px;
        position: relative;
        button.save{
            font-weight: 600;
            display: block;
            position: absolute;
            top: 0;
            right: 20px;
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
`;
 
const LoginHome= () => {
    return (
        <Wrap>
            <Nav />
            <Section>
              <div className="calendar sub_box">
                <h2>Calendar</h2>
                  <div className="write_box1">
                    <textarea maxLength={800}></textarea>
                  </div>
              </div>
              <div className="list sub_box">
                <h2>To Do List</h2>
                  <div className="write_box2">
                    <textarea maxLength={800}></textarea>
                  </div>
                    <div className="moti">
                      <h2>Motivate</h2>
                        <div className="write_box3">
                          <textarea maxLength={800}></textarea>
                        </div>
                    </div>
              </div>               
                <div className="btnbox">
                  <button className="save">SAVE</button>
                </div>
                  <p className="copy">&#169; Plannet.</p>
                
              
                
            </Section>
        </Wrap>
    );
}
export default LoginHome;