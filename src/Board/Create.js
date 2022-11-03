// import styled from "styled-components";
// import Nav from "../Utill/Nav";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// // import ReactHtmlParser from 'react-html-parser';
// import {useState} from 'react';
// // // 임시파일

// // const Wrap = styled.div`
// //     width: 1130px;
// //     height: 100vh;
// //     background-color: white;
// //     margin: 0 auto;
// // `;

// const Wrap = styled.div`
//     width: 1130px;
//     height: 100vh;
//     background-color: white;
//     margin: 0 auto;
// `;

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
    .form-wrapper {
        width: 100%;
        margin: 0 auto;
    }
    .title-input {
        width: 400px;
        height: 40px;
        text-align: center;
        margin-left: 185px;
        margin-bottom: 30px;
    }
    .text-area {
        width: 80%;
        min-height: 500px;
    }
    .submit-button {
        font-weight: 600;
        display: block;
        position: absolute; 
        right: 30px;
        font-size: 16px;
        padding: 8px 35px;
        border-radius: 25px;
        background-color: #4555AE;
        color: white;
        border: none;
        transition: all .1s ease-in;
        &:hover{
            background-color: #4555AE;
        }
    }
    .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
        height: 600px; 
    }
`;

function Create() {
    const [creatBoard, setCreateBoard] = useState ({
        title: '',
        detail: ''
    })
    const [viewBoard, setViewBoard] = useState([]);
    const getValue = e => {
        const { name, value } = e.target;
        setCreateBoard ({
            ...creatBoard,
            [name]: value
        })
        console.log(creatBoard);
    };
    const onclickUpload = () => {
        setViewBoard(viewBoard.concat({...creatBoard}))};
    return (
        <Wrap>
            <Nav></Nav>
            <Section>
                <div className="board_list sub_box">
                    {viewBoard.map(element =>
                      <div style={{ border: '1px solid #333' }}>
                        <h2>{element.title}</h2>
                        <div>
                            {(element.detail)}
                            </div>
                        </div>
                    )}
                    <h2>자유게시판</h2>
                    <p>
                        <span>작성 시 유의해 주세요! 비방, 광고, 불건전한 내용의 글은 사전 동의 없이 삭제될 수 있습니다.</span>
                    </p>                
                </div>
                <div>
                    <table>
                        <tr>
                            <th>게시물 작성</th>
                        </tr>
                    </table>
                </div>
                <div className='form-wrapper'>
                  <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title' />
                <CKEditor
          editor={ClassicEditor}
          data="<p>자유롭게 글을 작성하세요!</p>"
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setCreateBoard ({
                ...creatBoard,
                detail: data
            })
            console.log(creatBoard);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
            </div>
            <button className="submit-button"
            onClick={onclickUpload}>등록</button>
            <p className="copy">&#169; Plannet.</p>
            </Section>
        </Wrap>
    )
};

// export default Create;

// // // <div className="boardmain"> 
// // // <div>
// // //     <h1>자유게시판</h1>
// // //     <p>뭔가 들어갈 글이 필요하려나? 작성 시 유의해 주세요! 비방, 광고, 불건전한 내용의 글은 사전 동의 없이 삭제될 수 있습니다.</p> 
// // // </div>
// // // <br></br>
// // // <div style={{background:'gray', height:'500px'}}> 
// // //     <div>
// // //        제목<input type="text"></input><br></br>
// // //        작성자<input type="text"></input><br></br>
// // //     </div>
// // //     <hr></hr>
// // //     <div>
// // //         내용 <br></br>
// // //         여기에 이제 게시판 관련 플러그인 추가, 위즈윅 에디터, summernote, 리액트로 에디터 구현 등 
// // //         https://github.com/jpuri/react-draft-wysiwyg
// // //         https://github.com/channaveer/tutorial-summernote-texteditor
// // //         no jquery summernote editor
// // //     </div>
// // // </div>
// // // <div>첨부파일</div>
// // // <br></br>
// // // <div className='center'>
// // //     <button>등록</button>
// // //     <button>취소</button>
// // // </div>
// // // </div>
// // // </div>
// // // </div>