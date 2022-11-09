import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Modal from '../Utill/Modal';
import Api from '../api/plannetApi'
import Nav from '../Utill/Nav';

const Wrap = styled.div`
    width: 1130px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
    .copy {
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
    div {
        width: 100%;
        padding: 10px 30px;
    }
    .sub_box {
        h2 {
            font-size: 28px;
            margin-top: 35px;
            font-weight: 900;
        }
        span {
            float: left;
            margin-top: 10px;
            margin-bottom: 15px;
        }
    }
    button {
        border: none;
        padding-right: 20px; 
        background: none;
        font-size: 16px; 
        color: #bbb;
        font-weight: 700;
        transition: all .1s ease-in;
        &:hover, &:hover i {color: #888;}
        i {
            font-size: 16px; 
            line-height: 48px; 
            color: #bbb;
            transition: all .1s ease-in;
        }
    }
    .postInfo {
        border-collapse: collapse; 
        width:100%;
        background-color: #4555AE;
        border-bottom: solid 1px #bbb;
        text-align: center;
        tr:first-child td {border-top: solid 1px #4555AE; background-color: #f9f9f9;}
        th {padding: 10px; color: white;}
        td {padding: 10px; width: 150px; background-color: white; border-left: solid 1px #bbb; border-top: solid 1px #ddd;}
        td:first-child {border-left: none;}
        td:nth-child(2) {width: 400px; text-align: left; padding-left: 20px;}  
        .title-input {font-size:20px; font-weight: 500;}
        .bi {padding-right:5px;}
        .bi-heart-fill {margin-left:13px;}
    }
    .detail{
        width: 100%;
        min-height: 500px;
        padding: 30px;
        border-bottom: 1px solid #4555AE;
        table {width: 100%; margin: 10px 0;}
        table, tr, td {
            border-collapse: collapse;
            padding: 5px;
            border: 1px solid #ddd;
            background: none;
        }
    }
    .button-area1 {
        text-align: right;
        .btn {
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
            &:hover {background-color: #666;
                color: #888;}
        }
        .left-space {
            margin-left: 10px;
        }
        .bi {color: red;}
    }
    .util_box{
        .page_list {
            width: 500px; float:left;
            li {list-style-type: none; display: inline; padding: 0px 5px;
                a {
                    display: inline-block; text-decoration: none; padding: 5px 10px; color:#000;
                    border-radius: 5px;
                    -webkit-transition: background-color 0.3s;
                    transition: background-color 0.3s;
                    &:active {background-color: #4caf50; color: #fff;}
                    &:hover {color:#0d3c01; font-weight: bold;}
                    &:hover:not(.active) {background-color: #4555AE; color:white;}
                }
            } 
        }
        .search {
            float: right;
            width: 200px; height: 35px; padding: 0 10px; border: solid 2px #ddd; 
            background-color: white;
            input {width: 150px; height: 31px; border: 0px; outline: none; margin-right: 10px;}
        }
    }
    h3 {
        font-size: 28px;
        font-weight: 900;
        width: 100%;
        padding: 10px 30px;
    }
    .comment_box {
        width: 100%;
        min-height: 300px;
        table{width: 100%; margin: 10px 0;}
        table, tr, td{
            border-collapse: collapse;
            padding: 5px;
            border: 1px solid #ddd;
            background: none;
        }
    }
    .button-area2 {
        text-align: right;
        .comment_btn{
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
        .comment_text {
            position: relative;
            font-weight: 600;
            font-size: 16px;
            right: 10px;
            padding: 8px 35px;
            border-radius: 25px;
            background-color: #333;
            color: white;
            border: none;
        }
    }
    h3 {
        font-size: 28px;
        font-weight: 900;
        width: 100%;
        padding: 10px 30px;
    }
    .comment_box {
        width: 100%;
        min-height: 300px;
        table{width: 100%; margin: 10px 0;}
        table, tr, td{
            border-collapse: collapse;
            padding: 5px;
            border: 1px solid #ddd;
            background: none;
        }
    }
    .button-area2 {
        text-align: right;
        .comment_btn{
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
        .comment_text {
            position: relative;
            font-weight: 600;
            font-size: 16px;
            right: 10px;
            padding: 8px 35px;
            border-radius: 25px;
            background-color: #333;
            color: white;
            border: none;
        }
    }
`;

const PostView = () => {
    const getId = window.localStorage.getItem("userId");
    const getNum = window.localStorage.getItem("boardNo");
    const getWriterId = window.localStorage.getItem("writerId");
    const [boardLoad, setBoardLoad] = useState();
    const [boardViews,setBoardViews] = useState(0);
    const [likeCnt, setLikeCnt] = useState(); // 좋아요 수 체크
    const [likeChecked, setLikeChecked] = useState(false); // 내가 좋아요를 했는지 체크
    const [comments, setComments] = useState(''); 
    const [commentsList, setCommentsList] = useState([]);
    const [limit, setLimit] = useState(15);  // 페이지당 댓글 수 (현재는 15개 고정)
    const [page, setPage] = useState(1); // 현재 댓글 페이지 번호
    const offset = (page - 1) * limit; // 댓글 페이지 위치 계산
    const numPages = Math.ceil(commentsList.length / limit); // 필요한 댓글 페이지 개수
    
    // 게시물 삭제, 수정 팝업
    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOption, setModalOption] = useState('');
    const closeModal = () => {
        setModalOpen(false);
    };
    const onClickEdit = () => {
        setModalOpen(true);
        setModalOption('수정');
        setComment("수정하시겠습니까?");
    }
    const deleteData = () => {
        setModalOpen(true);
        setModalOption('삭제');
        setComment("삭제하시겠습니까?");
    }
    const onClickLike = () => {
        setLikeChecked(!likeChecked);
        if (likeChecked) setLikeCnt(likeCnt + 1);
        else (setLikeCnt(likeCnt - 1));
    }

    // 댓글 입력
    const onChangeComments = (e) => {
        setComments(e.target.value);
    }
    // 댓글 수정
    const onClickSaveComments = async() => {
        await Api.commentCreate(getId,comment,getNum);
    } 
    
    useEffect(() => {
        const increaseViews = async () => {
            try {
                const response = await Api.boardViews(getNum);
                setBoardViews(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        const boardDataUtil = async () => {
            try {
                const response1 = await Api.boardLoad(getNum);
                setBoardLoad(response1.data);
                const response2 = await Api.likeCnt(getId, getNum);
                setLikeCnt(response2.data.likeCnt);
                const response3 = await Api.likeChecked(getId, getNum);
                setLikeChecked(response3.data.likeChecked);
                const response4 = await Api.commentLoad();
                window.localStorage.setItem("commentNum",response4.data.value[1]);
                setCommentsList(response4.data);
            } catch (e) {
                console.log(e);
            }
        };
        if(getWriterId !== getId) increaseViews();
        boardDataUtil();
    }, [getNum]);

    return(
        <Wrap>
            <Nav/>
            <Section>
            <Modal open={modalOpen} close={closeModal} header="글수정삭제" boardNo={getNum} option={modalOption}>{comment}</Modal>
                {boardLoad&&boardLoad.map( e => (
                    <> <p>{likeChecked}</p>
                        <div className="board_list sub_box"> 
                            <h2>자유게시판</h2>
                            <p><span>유저들이 작성한 글에 댓글과 좋아요를 남기며 소통해보세요! <br />커뮤니티 규칙에 맞지 않는 글과 댓글은 무통보 삭제됩니다.</span></p>  
                            <table className='postInfo'>
                                <tr>
                                    <td className="title-input" key={e.num} colSpan={4}>{e.title}</td>
                                </tr>
                                <tr>
                                    <td>No.{e.num}</td>
                                    <td>Writer. {e.nickname}</td>
                                    <td><i class="bi bi-eye"></i>{e.views}<i class="bi bi-heart-fill"></i>{likeCnt}</td>
                                    <td>{(e.date).substring(0,10)}</td>
                                </tr>
                            </table>
                            <div className='detail' dangerouslySetInnerHTML={{__html: e.detail}}></div>
                        </div>
                        <div className="button-area1">
                            <button onClick={onClickLike}>{likeChecked === true ? <i className="bi bi-heart"></i> : <i className="bi bi-heart-fill"></i>}</button>
                            <Link to='/board'><button className='btn left-space'>BACK</button></Link>
                            {getId === e.id ? <><button className='btn left-space' onClick={onClickEdit}>EDIT</button><button className='btn left-space' onClick={deleteData}>DELETE</button></> : null}
                        </div>
                    </>))}
                        <h3>댓글</h3>
                        <div className='comment_box'>
                        <table>
                            <tr>
                                <th>Comment.No</th>
                                <th>Writer</th>
                                <th>Comment</th>
                                <th>Date</th>
                                {commentsList.slice(offset, offset+limit).map(({commentNo,id,comment,date})=>(
                                    <tr key={commentNo}>
                                        <td>{commentNo}</td>
                                        <td>{id}</td>
                                        <td>{comment}</td>
                                        <td>{date}</td>
                                    </tr>
                                ))}
                            </tr>
                        </table>
                    <div>
                        {/* <ul className="page_list">
                            <li><span onclick = {()=> setPage(page - 1)} disabled = {page === 1}>«</span></li>
                            {Array(numPages).fill().map((_, i) => (
                            <li><span key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}>{i + 1}</span></li>
                            ))}
                            <li><span onclick = {()=> setPage(page + 1)} disabled = {page === numPages}>»</span></li>
                        </ul> */}
                    </div>
                    </div>
                    <div className="button-area2">
                    <input type='text' className='comment_text' placeholder='댓글 달기...' value={comments} onChange={onChangeComments} name='comments' size='60'></input>
                    <button className='comment_btn' onClick={onClickSaveComments}>SAVE</button>
                    </div>
            </Section>
            <div className="copy">&#169; Plannet.</div>
        </Wrap>
    )
};

export default PostView;