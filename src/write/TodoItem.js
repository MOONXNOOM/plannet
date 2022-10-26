// 수정중인파일


// import { useState } from "react";
// import styled from "styled-components";

// const StyledInput = styled.input`
//         appearance: none;
//         border: 2px solid #bbb;
//         border-radius: 0.2rem;
//         width: 20px;
//         height: 20px;
//         margin-right: 8px;
//         transition: all .03s ease-in;

//     &:checked {
//         border-color: transparent;
//         background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
//         background-size: 150% 150%;
//         background-position: 50%;
//         background-repeat: no-repeat;
//         background-color: #4555AE;
//     }
// `;

// const TodoItem = () => {
    
//     //수정중
//     const [list, setList] = useState([
//         {id: 1, check: true, text: "청소하기"},
//         {id: 2, check: false, text: "점심먹기"},
//         {id: 3, check: false, text: "강아지랑 산책하기"},
//         {id: 4, check: false, text: "리액트 공부하기"}
//     ]);
//     const[inputTxt, setInputTxt] = useState("");
//     const[nextId, setNextId] = useState(5);
//     const[checked, setChecked] = useState(false);
//     const onChange = e => setInputTxt(e.target.value);

//     const onClickCheck = (c) => {
//         if(c.target.checked) setChecked(true);
//         else setChecked(false);
//         console.log(c.target.checked);
//     };

//     const onClick = () => {
//         const nextNames = list.concat({id: nextId, check: checked, text: inputTxt});
//             setNextId(nextId + 1);
//             setList(nextNames);
//             setInputTxt('');
//             setChecked(false);
//             console.log(list);
//     };
//     const onRemove = id => {
//             const nextNames = list.filter(n => n.id !== id);
//             setList(nextNames);
//             console.log(list);
//     };
    
//     return(
//         <li key={n.id}>
//             <StyledInput type="checkbox" checked={checked} onClick={onClickCheck} readOnly/>
//             <input type="text" value={list.text} onChange={onChange} maxLength={30} placeholder="체크리스트 작성"/>
//             <button onClick={() => onRemove(n.id)}><i class="bi bi-trash3-fill" /></button>
//         </li>
//     );
    
// }
// export default TodoItem;
