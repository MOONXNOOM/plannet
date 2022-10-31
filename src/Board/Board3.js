import React, {useState, useEffect} from 'react';
//import './App.css';
import './style2.css';

// 임시파일

const BoardSi3 = () => {
    
    return(
        <div className="wrap">
            <div className="board" >
                {/* <div className="sidenav left">
                    <a href="#about">메뉴부분</a>
                    <a href="#services">만들어지면</a>
                    <a href="#clients">가져오기</a>
                    <a href="#contact">채우기용 영역</a>
                </div> */}
                <div className="boardmain"> 
                    <div>
                        <h2>내용보기</h2>
                        <hr></hr>
                        <div><h3>게시글 제목 불러오기 22222</h3></div>
                        <hr></hr>
                        <div>
                                <p>
                                    <span>작성자</span>
                                    <span>작성자</span>
                                    <span>작성일</span>
                                    <span>작성일</span>
                                    <span>조회수</span>
                                    <span>조회수</span>
                                    <span>♥</span>
                                    <span>좋아요수</span>
                                </p>
                        </div>
                    </div>
                    <hr></hr>
                    <div style={{background:'gray', height:'500px'}}> 
                        <div>
                            본문 내용
                        </div>
                    </div>
                    <div>첨부파일 l 첨부된 파일</div>
                    <br></br>
                    <hr></hr>
                    <div className='center'>
                        {/* 다시 누르면 좋아요 취소되게 할지, 혹은 값 변동 안 되고 대신 '좋아요는 한번만 누를 수 있다' modal 띄우기 */}
                        <button>좋아요 + 좋아요 수 함께 뜨는 버튼</button>
                        {/* https://ablue-1.tistory.com/21 */}
                    </div>
                    <div className='center'>
                        <button>목록보기</button>
                        <button>글쓰기</button>
                        {/* 수정/삭제하려면 비밀번호 확인 modal 뜨게 하기 or 자신의 글만 애초에 수정 버튼이 뜨게 구현 */}
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
                
                </div>
            </div>
        </div>
    )
};

export default BoardSi3;