import styled from "styled-components";

const ListBox = styled.div`
    width: 100%;
    ul{
        display: block;
        width: calc((100% - 30px) / 7);
        background-color: #f8f8f8;
        border-radius: 5px;
        float: left;
        margin-right: 5px;
        padding: 5px;
        li{
            overflow: hidden;
            text-overflow: ellipsis;
        }
        &:last-child{
            margin-right: 0;
        }
    }
`;

const List = () => {
    return(
        <ListBox>
            <ul>
                <p>월요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>화요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>수요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>목요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>금요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>토요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>일요일</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
        </ListBox>
    );
}
export default List;