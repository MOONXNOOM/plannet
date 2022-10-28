import React, { useCallback, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import plannetApi from '../api/plannetApi';
import { Link } from "react-router-dom";
import App from '../App';

// 해당 부분은 디자인 수정은 되지 않은 코드, 추후 삽입할 때 위치 및 사이즈는 별도로 지정해주기 

// 전체적인 메모장 프레임 
const Wrap = styled.div`
    position: absolute;
    width: 200px;
    background: yellow;
    border: 1px solid #c0c0a4;
    box-sizing: border-box;
`;

// 메모장의 헤더부분 
const Header = styled.div`
    padding: 5px;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    color: white;
    background: #c0c0a4;
    text-align: center;
`;

// 메모장의 본문부분
const Content = styled.div`
    padding: 5%;
    overflow-y: auto;
    textarea {
        padding: 5%;
        width: 100%;
        min-height: 150px;
        box-sizing: border-box;
        background: none;
        outline: none;
        border: none;
        resize: none;
    }
`;

const Memo = () => {
    const [memoText, setMemoText] = useState('');
    // const wrapRef = useRef(null);
    const headerRef = useRef(null);

    const onFocusout = useCallback(({ target }) => {
        setMemoText(target.value);
    }, [memoText]);

    return (
        <Wrap>
            <Header 
                ref={headerRef}
                // onMouseDown={onMouseDown}
            >
                MEMO
            </Header>
            <Content>
                <textarea 
                    placeholder="자유롭게 메모하세요."
                    onBlur={onFocusout}    
                ></textarea>
            </Content>
        </Wrap>
    );
};

export default Memo;