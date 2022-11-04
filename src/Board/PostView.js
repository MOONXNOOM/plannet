import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Nav from '../Utill/Nav';
import Api from '../api/plannetApi'

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
            float:right;
            font-weight: 600;
            display: block;
            font-size: 16px;
            padding: 8px 35px;
            border-radius: 25px;
            background-color: #4555AE;
            color: white;
            border: none;
            &:hover{background-color: #666;}
        }
    }
    button{
        border: none;
        padding-right: 20px; 
        background: none;
        font-size: 16px; 
        color: #bbb;
        font-weight: 700;
        transition: all .1s ease-in;
        &:hover, &:hover i{color: #888;}
        i{
            font-size: 16px; 
            line-height: 48px; 
            color: #bbb;
            transition: all .1s ease-in;
        }
    }
    table{
        border-collapse: collapse; 
        width:100%;
        background-color: #4555AE;
        border-bottom: solid 1px #4555AE;
        text-align: center;
        tr:nth-child(2n) td{background-color: #f9f9f9;}
        th{padding: 10px; color: white;}
        td{padding: 10px; background-color: white; border-left: solid 1px #bbb; border-top: solid 1px #ddd;}
        td:first-child{border-left: none};
        td:nth-child(2){width: 400px; text-align: left; padding-left: 20px;}  
        tr:hover td, tr:hover a{color: #4555AE;}
    }
    .util_box{
        .page_list {
            width: 500px; float:left;
            li{list-style-type: none; display: inline; padding: 0px 5px;
                a{
                    display: inline-block; text-decoration: none; padding: 5px 10px; color:#000;
                    border-radius: 5px;
                    -webkit-transition: background-color 0.3s;
                    transition: background-color 0.3s;
                    &:active {background-color: #4caf50; color: #fff;}
                    &:hover{color:#0d3c01; font-weight: bold;}
                    &:hover:not(.active) {background-color: #4555AE; color:white;}
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

const PostView = () => {
    const [boardLoad, setBoardLoad] = useState();
    const getNum = window.localStorage.getItem("boardNo");
    console.log(getNum);

    
    useEffect(() => {
        const boardData = async () => {
            try {
                const response = await Api.boardLoad(getNum);
                setBoardLoad(response.data);
                console.log(response.data);
            } catch (e) {
                console.log(e);
            }
        };
        boardData();
    }, []);
    return(
        <Wrap>
            <Nav />
            <Section>
                <div className="board_list sub_box"> 
                        <h2>내용보기</h2>
                        <hr></hr> 
                        {boardLoad&&boardLoad.map(e=>(
                            <>
                                <div key={e.num}>
                                    <h3>{e.title}</h3>
                                </div>
                                <hr></hr> 
                                <div>
                                    <p>
                                        <span>작성자 : {e.id} /</span>
                                        <span>작성일 : {e.date} /</span>
                                        <span>조회수 : {e.views} /</span>
                                        <span>♥</span>
                                        <span>좋아요수</span>
                                    </p>
                                </div>
                                <hr></hr>
                                <div style={{background:'gray', height:'500px'}}> 
                                    <div key={e.num}>
                                        {e.detail}
                                    </div>
                                </div>
                            </>
                            
                        ))}
                        
                    </div>
                    <div>첨부파일 l 첨부된 파일</div>
                    <br></br>
                    <hr></hr>
                    <div className='center'>
                        다시 누르면 좋아요 취소되게 할지, 혹은 값 변동 안 되고 대신 '좋아요는 한번만 누를 수 있다' modal 띄우기
                        <button>좋아요 + 좋아요 수 함께 뜨는 버튼</button>
                        https://ablue-1.tistory.com/21
                    </div>
                    <div className='center'>
                        <button>목록보기</button>
                        <button>글쓰기</button>
                        * 수정/삭제하려면 비밀번호 확인 modal 뜨게 하기 or 자신의 글만 애초에 수정 버튼이 뜨게 구현
                        <button>수정</button>
                        <button>삭제</button>
                    </div>
                    <div style={{background:'green', height:'100px'}}>
                        댓글작성란
                    </div>
                    <div style={{background:'gray', height:'300px'}}>
                        댓글란 - 닉네임, 내용, 작성시간, 댓글에 hover하면 자신의 댓글인 경우 오른쪽 모서리 상단에 x버튼 뜨게:삭제기능
                        댓글 늘어날 때마다 전체 페이지 스크롤 늘어나게, 아니면 또 페이지 구현 
                    </div>
            </Section>
        </Wrap>
    )
};

export default PostView;

// <div className="wrap">
//     <div className="board" >
//         <div className="boardmain"> 
//             <div>
//                 <h2>내용보기</h2>
//                 <hr></hr>
//                 {boardDetail&&boardDetail.map(getNum=>(
//                     <div key={getNum.num}>
//                         <h3>게시글 제목 불러오기 {getNum.title}</h3>
//                     </div>
//                 ))}
//                 <hr></hr>
//                 <div>
//                         <p>
//                             <span>작성자</span>
//                             <span>작성자</span>
//                             <span>작성일</span>
//                             <span>작성일</span>
//                             <span>조회수</span>
//                             <span>조회수</span>
//                             <span>♥</span>
//                             <span>좋아요수</span>
//                         </p>
//                 </div>
//             </div>
//             <hr></hr>
//             <div style={{background:'gray', height:'500px'}}> 
//                 <div>
//                     본문 내용
//                 </div>
//             </div>
//             <div>첨부파일 l 첨부된 파일</div>
//             <br></br>
//             <hr></hr>
//             <div className='center'>
//                 {/* 다시 누르면 좋아요 취소되게 할지, 혹은 값 변동 안 되고 대신 '좋아요는 한번만 누를 수 있다' modal 띄우기 */}
//                 <button>좋아요 + 좋아요 수 함께 뜨는 버튼</button>
//                 {/* https://ablue-1.tistory.com/21 */}
//             </div>
//             <div className='center'>
//                 <button>목록보기</button>
//                 <button>글쓰기</button>
//                 {/* 수정/삭제하려면 비밀번호 확인 modal 뜨게 하기 or 자신의 글만 애초에 수정 버튼이 뜨게 구현 */}
//                 <button>수정</button>
//                 <button>삭제</button>
//             </div>
//             <div style={{background:'green', height:'100px'}}>
//                 댓글작성란
//             </div>
//             <div style={{background:'gray', height:'300px'}}>
//                 댓글란 - 닉네임, 내용, 작성시간, 댓글에 hover하면 자신의 댓글인 경우 오른쪽 모서리 상단에 x버튼 뜨게:삭제기능
//                 댓글 늘어날 때마다 전체 페이지 스크롤 늘어나게, 아니면 또 페이지 구현 
//             </div>
        
//         </div>
//     </div>
// </div>