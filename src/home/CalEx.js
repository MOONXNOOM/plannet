import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from "moment";
import React, { useState } from 'react';
import './CalEx.css';
import { Link } from "react-router-dom";



const CalEx = () => {
    const [value, setValue] = useState(new Date());
    // const mark = ['2022-10-27', '2022-10z`-15'];

    const dayIn = () => {
        const selectDate = moment(value).format('YYYY-MM-DD');
        window.localStorage.setItem("localDate", selectDate);
        const date222 = window.localStorage.getItem("localDate");   
        console.log("로칼저장" + date222);
        console.log("출력해보기" + selectDate); 
        // setTimeout(() => window.location.assign("/write"), 4000);
    }
    
    // const dayIn = () => {
    //     // setValue(moment(value).format('YYYY-MM-DD'));
    //     // console.log("출력해보기" + selectDate);
    //     // window.localStorage.setItem("localDate", selectDate);
    //     timer();
    //     const timer = setTimeout(()=>{ 
    //         const selectDate = moment(value).format('YYYY-MM-DD');
    //         window.localStorage.setItem("localDate", selectDate);
    //     }, 1000,);
    //     // timer();
    //     // window.loca  tion.assign("/write")
    // }
    

    // const timer = setTimeout(()=>{ 
    //     const selectDate = moment(value).format('YYYY-MM-DD');
    //     console.log("출력해보기" + selectDate); 
    //     window.localStorage.setItem("localDate", selectDate);
    //     window.location.assign("/write");
    // }, 1000);

    
    return(
        <div>
            <Calendar value={value} onClickDay={dayIn}
                // tileClassName={({ date, view }) => {
                // if (mark.find(x => x === moment(date).format('YYYY-mm-DD'))) {
                //     return 'highlight'
                // }}}
            />
            {console.log(moment(value).format('YYYY-MM-DD'))}
        </div>
    );
}
export default CalEx;