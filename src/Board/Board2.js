import React, {useState, useEffect} from 'react';
//import './App.css';
import './style2.css';

const BoardSi2 = () => {
    
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
                        <h1>자유게시판</h1>
                        <p>뭔가 들어갈 글이 필요하려나? 작성 시 유의해 주세요! 비방, 광고, 불건전한 내용의 글은 사전 동의 없이 삭제될 수 있습니다.</p> 
                    </div>
                    <br></br>
                    <div style={{background:'gray', height:'500px'}}> 
                        <div>
                           제목<input type="text"></input><br></br>
                           작성자<input type="text"></input><br></br>
                        </div>
                        <hr></hr>
                        <div>
                            내용 <br></br>
                            여기에 이제 게시판 관련 플러그인 추가, 위즈윅 에디터, summernote, 리액트로 에디터 구현 등 
                            https://github.com/jpuri/react-draft-wysiwyg
                            https://github.com/channaveer/tutorial-summernote-texteditor
                            no jquery summernote editor
                        </div>
                    </div>
                    <div>첨부파일</div>
                    <br></br>
                    <div className='center'>
                        <button>등록</button>
                        <button>취소</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BoardSi2;