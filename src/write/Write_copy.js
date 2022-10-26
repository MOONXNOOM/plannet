import { useState } from "react";
import styled from "styled-components";
import Nav from "../util/Nav";

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
    .btnbox{
        height: 90px;
        line-height: 70px;
        position: relative;
        i{
            font-size: 22px; 
            vertical-align: middle;
            transition: all .1s ease-in;
        }
        button.back{
            font-weight: 300;
            font-size: 16px; 
            vertical-align: middle;
            background: none;
            border: none;
            transition: all .1s ease-in;
        }
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
    .btnbox:last-of-type{
        height: 50px;
    }
    .btnbox:first-of-type:hover i, .btnbox:first-of-type:hover button{
        color: #bbb;
    }
    .sub_box{
        h2{
            font-size: 28px;
            margin-bottom: 10px;
            font-weight: 900;
        }
    }
    .write_box{
        padding: 20px;
        width: 100%;
        background-color: #f9f9f9;
        border-radius: 5px;
    }
    .plan_it{
        height: 370px;
        .write_box{
            height: 300px;
            padding-bottom: 0;
        }
        ul{height: 230px;
            overflow-y: scroll;
                &:focus {outline: none;}
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
        li{
            line-height: 30px; 
            margin-bottom: 5px; 
            border-bottom: 2px solid #f5f5f5;
            transition: all .1s ease-in;
            &:focus-within{
                border-bottom: 2px solid #4555AE;
            }
            button{
                display: block;
                float: right;
                padding-right: 0;
                i{
                    font-size: 18px; 
                    line-height: 30px; 
                    color: #bbb;
                    transition: all .1s ease-in;
                }
                &:hover i{
                    color: #4555AE;
                }
            }
        }
        button{
            border: none;
            padding-right: 20px; 
            background: none;
            font-size: 16px; 
            color: #bbb;
            font-weight: 700;
            transition: all .1s ease-in;
            &:hover, &:hover i{color: #888;}
            i{
                font-size: 16px; 
                line-height: 48px; 
                color: #bbb;
                transition: all .1s ease-in;
            }
        }
        input{vertical-align: middle;}
        input[type="text"]{
            width: 400px;
            border: none;
            background: none;
            padding: 4px;
            overflow: hidden;
            &:focus {
                outline: none;
            }
            &::placeholder{color: #bbb;}
        }
    }
    .diary{
        height: 350px;
        .write_box{
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
    hr{
        border: none;
         background: #ddd;
        height: 2px; 
    }
    .copy{
        width: 850px;
        position: absolute;
        bottom: 0;
        text-align: center;
        color: #dfdfdf;
        line-height: 50px;
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
const StyledInput = styled.input`
        appearance: none;
        border: 2px solid #bbb;
        border-radius: 0.2rem;
        width: 20px;
        height: 20px;
        margin-right: 8px;
        transition: all .03s ease-in;

    &:checked {
        border-color: transparent;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
        background-size: 150% 150%;
        background-position: 50%;
        background-repeat: no-repeat;
        background-color: #4555AE;
    }
`;

const Writecopy = () => {
    const date = "2022년 10월 26일";
    //수정중
    const [list, setList] = useState([
        {id: 1, check: true, text: "청소하기"},
        {id: 2, check: false, text: "점심먹기"},
        {id: 3, check: false, text: "강아지랑 산책하기"},
        {id: 4, check: false, text: "리액트 공부하기"}
    ]);
    const[inputTxt, setInputTxt] = useState("");
    const[nextId, setNextId] = useState(5);
    const[checked, setChecked] = useState(false);
    const onChange = e => setInputTxt(e.target.value);

    // const onClickCheck = (c) => {
    //     if(c.target.checked) setChecked(true);
    //     else setChecked(false);
    //     console.log(c.target.checked);
    // };

    const onClick = () => {
        const nextNames = list.concat({id: nextId, check: checked, text: inputTxt});
            setNextId(nextId + 1);
            setList(nextNames);
            setInputTxt('');
            setChecked(false);
            console.log(list);
    };
    const onRemove = id => {
            const nextNames = list.filter(n => n.id !== id);
            setList(nextNames);
            console.log(list);
    };
    
    const namesList = list.map(n => 
        <li key={n.id}>
            <StyledInput type="checkbox" />
            <input type="text" value={inputTxt} onChange={onChange} maxLength={30} placeholder="체크리스트 작성"/>
            <button onClick={() => onRemove(n.id)}><i class="bi bi-trash3-fill" /></button>
        </li>
    );
    //수정중

    return (
        <Wrap>
            <Nav />
            <Section>
                <div className="btnbox">
                    <button className="back">
                    <i className="bi bi-chevron-compact-left"/>{date}
                    </button>
                </div>
                <div className="plan_it sub_box">
                    <h2>Plan it</h2>
                    <div className="write_box">
                        <ul>{namesList}</ul> 
                        {/* 수정중 */}
                        <hr/>
                        <button onClick={onClick}>
                            <i class="bi bi-plus-lg"></i> 추가하기
                        </button>
                    </div>
                </div>
                <div className="diary sub_box">
                    <h2>Diary</h2>
                    <div className="write_box">
                        <textarea maxLength={800}></textarea>
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
export default Writecopy;