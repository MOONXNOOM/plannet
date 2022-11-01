import React, { useEffect, useState } from 'react';
import Api from "../api/plannetApi";

// 해당 부분은 디자인 수정은 되지 않은 코드, 추후 삽입할 때 위치 및 사이즈는 별도로 지정해주기 

const Quote = () => {
    const getRandom = Math.floor(Math.random() * 5 + 1);
    const [quoteText, setQuoteText] = useState('');
    
    useEffect(() => {
        const quote = async() => {
            try{
                const response = await Api.quoteRandom(String(getRandom));
                console.log(response.data.quote);
                setQuoteText(response.data.quote);
            } catch(e){
                console.log(e);
            }
        }
        quote();
    },[getRandom]);

    return (
        <textarea 
            placeholder="자유롭게 메모하세요."      
            value={quoteText}
        />
    );
};

export default Quote;