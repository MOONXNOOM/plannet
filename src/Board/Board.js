import React, {useState, useEffect} from 'react';
//import './App.css';
import './style2.css';

const BoardSi = () => {
    
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
                        <p>전 세계의 Plannet을 이용하는 유저들과 한 곳에서 소통해보세요!</p> 
                    </div>
                    <table>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Writer</th>
                            <th>Views</th>
                            <th>Date</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                    </table>
                    <br></br>
                    <div>
                        <form className="left" id="search" name="search" method="post">
                            <input name="product_search" title="상품검색" placeholder="검색어 입력"/>
                            <a href="#" onclick="submit"><i class="bi bi-search"></i></a>
                        </form>
                        <div id="wrapper right">
                            <div className='left'>
                                <ul id="pagination">
                                    <li><a href="#">«</a></li>
                                    <li><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">6</a></li>
                                    <li><a href="#">7</a></li>
                                    <li><a href="#">»</a></li>
                                </ul> 
                            </div>
                            <button className='right'>작성하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BoardSi;