import React, { useState, useEffect } from 'react';
import Api from "../api/plannetApi";


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

    const onBlurSave = async() => {
        await Api.memberMemoSave(getId, memoText);
    }

    return (
        <textarea 
            placeholder="자유롭게 메모하세요."
            value={memoText}
            onChange={onChange}
            onBlur={onBlurSave}
            maxLength="2400"
        />
    );
};

export default Memo;