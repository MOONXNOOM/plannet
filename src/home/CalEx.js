import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import moment from "moment";
import React, { useState } from 'react';
import './CalEx.css';

const CalEx = () => {

    const [value, setValue] = useState(new Date());
    const dayIn = (value) => {
        const selectDate = moment(value).format('YYYY-MM-DD');
        const link = "/write/" + selectDate;
        window.location.assign(link);
    }

    return(
        <div>
            <Calendar onChange={setValue} value={value} onClickDay={dayIn}/>
        </div>
    );
}
export default CalEx;
