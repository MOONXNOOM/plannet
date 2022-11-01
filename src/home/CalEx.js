import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from "moment";
import React, { useState } from 'react';



const CalEx = () => {
    const [value, setValue] = useState(new Date())
    const mark = ['2022-10-27', '2022-10-15'];
    return(
        <div>
            달력이 구현될 공간
            <Calendar onChange={setValue} value={value}
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