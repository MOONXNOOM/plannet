// import React, { useState } from "react";
// import { getYear, getMonth } from "date-fns"; // getYear, getMonth 
// import DatePicker, { registerLocale } from "react-datepicker";
// import ko from 'date-fns/locale/ko'; 
// registerLocale("ko", ko);
// const _ = require('lodash');

// const Calendar = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const years = _.range(1990, getYear(new Date()) + 1, 1); // 수정
//     const months = ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']; 

//   return (
//     <DatePicker
//     selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       shouldCloseOnSelect={false}
//       renderCustomHeader={({
//         date,
//         changeYear,
//         changeMonth,
//         decreaseMonth,
//         increaseMonth,
//         prevMonthButtonDisabled,
//         nextMonthButtonDisabled
//       }) => (
//         <div
//           style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center"
//           }}
//         >
//           <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//             {"<"}
//           </button>
//           <select
//             value={getYear(date)}
//             onChange={({ target: { value } }) => changeYear(value)}
//           >
//             {years.map(option => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <select
//             value={months[getMonth(date)]}
//             onChange={({ target: { value } }) =>
//               changeMonth(months.indexOf(value))
//             }
//           >
//             {months.map(option => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//             {">"}
//           </button>
//         </div>
//       )}
//       Selected={startDate}
//       dateFormat={"yyyy-MM-dd"}
//       locale={ko}
//       OnChange={date => setStartDate(date)}
//     />
//   );
// };
// export default Calendar
