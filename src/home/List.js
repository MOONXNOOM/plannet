import styled from "styled-components";

const ListBox = styled.div`
    width: 100%;
    ul:first-child p{color: rgb(206, 36, 36);}
    ul:last-child p{color: #3249ce;}
    ul{
        display: block;
        width: calc((100% - 30px) / 7);
        height: 230px;
        background-color: #f8f8f8;
        border-radius: 5px;
        float: left;
        margin-right: 5px;
        padding: 5px;
        p{
            width: 100%;
            font-size: 15px;
            line-height: 26px;
            text-align: center;
            font-weight: 700;
            margin-bottom: 7px;
            border-bottom: 2px solid #eee;
        }
        li{
            padding: 3px 8px;
            white-space:nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            list-style-type: disc !important;
            list-style-position:inside;
            marker-offset: 2px;
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
                <p>SUN</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>MON</p>
                <li>일정11111111111111111111111</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>TUE</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>WED</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>THU</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>FRI</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            <ul>
                <p>SAT</p>
                <li>일정1</li>
                <li>일정1</li>
                <li>일정1</li>
            </ul>
            
        </ListBox>
    );
}
export default List;