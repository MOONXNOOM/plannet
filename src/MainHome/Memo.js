import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
import Api from "../api/plannetApi";
// import { Link } from "react-router-dom";
// import App from '../App';

// 해당 부분은 디자인 수정은 되지 않은 코드, 추후 삽입할 때 위치 및 사이즈는 별도로 지정해주기 

const Memo = () => {
    const getId = window.localStorage.getItem("userId");
    const [memoText, setMemoText] = useState('');
    
    const onChange = (e) => {
        setMemoText(e.target.value);
    };

    useEffect(() => {
        const memoList = async() => {
            try{
                const response = await Api.memberMemo(getId);
                setMemoText(response.data[0].memo);
            } catch(e){
                console.log(e);
            }
        }
        memoList();
    },[getId]);

    return (
        <textarea 
            placeholder="자유롭게 메모하세요."
            value={memoText}
            onChange={onChange}
            maxLength="2400"
        />
    );
};

export default Memo;