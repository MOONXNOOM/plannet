import styled from "styled-components";
import Nav from "../Util/Nav";

const Wrap = styled.div`
    width: 1130px;
    height: 100vh;
    background-color: white;
    margin: 0 auto;
`;

const Section = styled.div`
    width: 850px;
    height: 100vh;
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
    .copy{
        width: 850px;
        position: absolute;
        bottom: 0;
        text-align: center;
        color: #dfdfdf;
        line-height: 50px;
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

const Board = () => {
    return (
        <Wrap>
            <Nav></Nav>
            <Section>
                <div className="board_list sub_box"> 
                    <h2>자유게시판</h2>
                    <p>
                        <span>전 세계의 Plannet 이용자들과 한 곳에서 소통해 보세요!</span>
                        <button>글쓰기</button>
                    </p>
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
                            <td>2</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td><a href="#">제목을 누르면 게시물로 이동</a></td>
                            <td>작성자</td>
                            <td>434</td>
                            <td>22.10.21</td>
                        </tr>
                    </table>
                </div>
                <div className="util_box">
                    <ul className="page_list">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#">»</a></li>
                    </ul> 
                    <form className="search" id="search" name="search" method="post">
                        <input name="product_search" title="검색" placeholder="검색어 입력"/>
                        <a href="#" onclick="submit"><i class="bi bi-search"></i></a>
                    </form>
                </div>
                <p className="copy">&#169; Plannet.</p>
            </Section>
        </Wrap>
    )
};

export default Board;