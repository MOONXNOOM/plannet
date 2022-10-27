import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

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


const PlanItem = ({planItem, planList, setPlanList}) => {
    const [edited, setEdited] = useState(false);
    const [newText, setNewText] = useState(planItem.text);

    const onChangeCheckbox = () => {
        const nextPlanList = planList.map((item) => ({
            ...item,
            checked: item.id === planItem.id ? !item.checked : item.checked,
        }));
        setPlanList(nextPlanList);
    }

    const onClickEdit = () => {
        if(planItem.checked === true){
            setEdited(false);
        } else{
            setEdited(true);
        }
    }

    const onBlurSubmit = (e) => {
        if(newText.length > 0){
            const nextPlanList = planList.map((item) => ({
                ...item,
                text: item.id === planItem.id ? newText : item.text,
            }));
            setPlanList(nextPlanList);
            setEdited(false);
        }
    }

    const onFocusInput = (e) => {
        e.target.value === "일정을 입력해주세요." ? (e.target.value = ""):(e.target.value = newText)
    }

    const onChangeEditInput = (e) => {
        setNewText(e.target.value);
    }

    const onClickRemove = (e) => {
        const nextPlanList = planList.map((item) => ({
            ...item,
            deleted: item.id === planItem.id ? !item.deleted : item.deleted,
        }));
        setPlanList(nextPlanList);
    }

    const editInputRef = useRef(null);
    useEffect(() => {
        if(edited) {
            editInputRef.current.focus();
        }
    }, [edited]);

    const testStyle = `
        ${planItem.checked ? 'donePlan' : ''} 
        ${planItem.text === "일정을 입력해주세요." ? 'firstPlanColor' : ''}
    `;


    return(
        <li>
            <StyledInput type="checkbox" checked={planItem.checked} onChange={onChangeCheckbox}/>
            {edited ? 
                (
                    <input type="text" value={newText} ref={editInputRef} onFocus={onFocusInput} onChange={onChangeEditInput} onBlur={onBlurSubmit}/>
                ) : (
                    <span className={testStyle} onClick={onClickEdit}>{planItem.text}</span>
                )
            }
            <button onClick={onClickRemove}><i class="bi bi-trash3-fill" /></button>
        </li>    
    );
}
export default PlanItem;