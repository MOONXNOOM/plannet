import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "../Utill/Nav";
import Api from '../api/plannetApi'
// import CommentMain from './CommentMain'

const Wrap = styled.div`
    width: 1130px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
    .copy{
        width: 830px;
        text-align: center;
        color: #dfdfdf;
        line-height: 40px;
        float: left;
    }
`;

const Section = styled.div`
    width: 850px;
    height: calc(100vh - 40px);
    float: left;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    &::-webkit-scrollbar {
        width: 20px;
        padding: 15px;
    }
    &::-webkit-scrollbar-thumb {
        height: 30%; /* 스크롤바의 길이 */
        background: #ddd; /* 스크롤바의 색상 */
        border-radius: 10px;
        border: 7px solid transparent;
        background-clip: padding-box;
    }
    &::-webkit-scrollbar-track {
        background: none;
        /*스크롤바 뒷 배경 색상*/
    }
    div{
        width: 100%;
        padding: 10px 30px;
    }
    .sub_box{
        h2{
            font-size: 28px;
            margin-top: 35px;
            font-weight: 900;
        }
        span{
            float: left;
            margin-top: 10px;
            margin-bottom: 15px;
        }
        button{
            cursor: pointer;
            font-weight: 600;
            float: right;
            font-size: 16px;
            padding: 8px 35px;
            border-radius: 25px;
            background-color: #333;
            color: white;
            border: none;
            transition: all .1s ease-in;
            &:hover{background-color: #666;
                color: #888;}
        }
    }
    table{
        border-collapse: collapse; 
        width:100%;
        background-color: #4555AE;
        border-bottom: solid 1px #4555AE;
        text-align: center;
        tr:nth-child(2n) td{background-color: #f9f9f9;}
        th{
            padding: 10px; 
            color: white;}
        td{padding: 10px; background-color: white; border-left: solid 1px #bbb; border-top: solid 1px #ddd;}
        td:first-child{border-left: none};
        td:nth-child(2){width: 400px; text-align: left; padding-left: 20px;}  
        tr:hover td, tr:hover a{color: #4555AE; background-color: #efefef; cursor: pointer;}
    }
    .util_box{
        .page_list {
            width: 500px; 
            float:left;
            li{
                list-style-type: none;
                display: inline; 
                padding: 0px 5px;
                cursor: pointer;
                span{
                    width: 25px;
                    text-align: center;
                    line-height: 25px;
                    display: inline-block; 
                    text-decoration: none; 
                    color:#000;
                    border-radius: 5px;
                    -webkit-transition: background-color 0.3s;
                    transition: background-color 0.3s;
                    &:active {background-color: #4555AE; color: #fff;}
                    &:hover{color:#0d3c01; font-weight: bold;}
                    &[aria-current] {background-color: #4555AE; color:white;}
                    &[disabled] {background: #eee; cursor: revert; transform: revert;}
                }
            } 
        }
        .search{
            float: right;
            width: 200px; height: 35px; padding: 0 10px; border: solid 2px #ddd; 
            background-color: white;
            input{width: 150px; height: 31px; border: 0px; outline: none; margin-right: 10px;}

        }
    }
`;

const Board = () => {
    const [boardList, setBoardList] = useState([]);
    const [limit, setLimit] = useState(15);  // 페이지당 게시물 수 (현재는 15개 고정)
    const [page, setPage] = useState(1); // 현재 페이지 번호
    const offset = (page - 1) * limit; // 게시물 위치 계산
    const numPages = Math.ceil(boardList.length / limit); // 필요한 페이지 개수

    const [boardNo, setBoardNo] = useState();

    //날짜 클릭시 해당 번호의 postView로 이동
    const onClickBoard = (boardNo, writerId) => {
        console.log(boardNo);
        const link = "/postView/" + boardNo;
        window.location.assign(link);
        window.localStorage.setItem("boardNo",boardNo);
        window.localStorage.setItem("writerId",writerId);
        
    }
    useEffect(() => {
        const boardData = async () => {
            try {
                const response = await Api.boardList();
                setBoardList(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        boardData();
    }, []);

    
    return (
        <Wrap>
            <Nav />
            <Section>
                <div className="board_list sub_box"> 
                    <h2>자유게시판</h2>
                    <p>
                        <span>전 세계의 Plannet 이용자들과 한 곳에서 소통해 보세요!</span>
                        <Link to='/create'><button>글쓰기</button></Link>
                    </p>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Views</th>
                            <th>Date</th>
                        </tr>
                        {boardList.slice(offset, offset + limit).map(({num, title, nickname, views, date, id}) => (
                            <tr key={num}>
                                <td>{num}</td>
                                <td onChange={setBoardNo} onClick={()=> onClickBoard(num, id)}>{title}</td>
                                <td>{nickname}</td>
                                <td>{views}</td>
                                <td>{(date).substring(0,10)}</td>
                            </tr>     
                        ))}
                    </table>
                </div>
                <div className="util_box">
                    <ul className="page_list">
                        <li><span onclick = {()=> setPage(page - 1)} disabled = {page === 1}>«</span></li>
                        {/*Array(numPages) :  페이지 수만큼의 size를 가지고 있는 배열을 생성하고 
                        .fill() : undefine으로 모든 칸 할당
                        .map(arr, i) : arr은 현재값, i는 인덱스로 각 자리 인덱스에 해당하는 값 할당 
                        Array(numPages).fill()의 값을 map()을 통해 하나씩 불러와 i로 return*/}
                        {Array(numPages).fill().map((_, i) => (
                        <li><span key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>{i + 1}</span></li>
                        ))}
                        <li><span onclick = {()=> setPage(page + 1)} disabled = {page === numPages}>»</span></li>
                    </ul> 
                    <form className="search" id="search" name="search" method="post">
                        <input name="product_search" title="검색" placeholder="검색어 입력"/>
                        <a href="#" onclick="submit"><i className="bi bi-search"></i></a>
                    </form> 
                </div>
                
            </Section>
            <div className="copy">&#169; Plannet.</div>
        </Wrap>
    )
};

export default Board;