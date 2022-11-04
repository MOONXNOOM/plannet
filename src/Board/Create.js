// import styled from "styled-components";
// import Nav from "../Utill/Nav";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// // import ReactHtmlParser from 'react-html-parser';
// import {useState} from 'react';
// // 임시파일

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

// function Create() {
//     const [creatBoard, setCreateBoard] = useState ({
//         title: '',
//         detail: ''
//     })
//     const [viewBoard, setViewBoard] = useState([]);
//     const getValue = e => {
//         const { name, value } = e.target;
//         setCreateBoard ({
//             ...creatBoard,
//             [name]: value
//         })
//         console.log(creatBoard);
//     };
//     const onclickUpload = () => {
//         setViewBoard(viewBoard.concat({...creatBoard}))};
//     return (
//         <Wrap>
//             <Nav></Nav>
//             <Section>
//                 <div className="board_list sub_box">
//                     {viewBoard.map(element =>
//                       <div style={{ border: '1px solid #333' }}>
//                         <h2>{element.title}</h2>
//                         <div>
//                             {(element.detail)}
//                             </div>
//                         </div>
//                     )}
//                     <h2>자유게시판</h2>
//                     <p>
//                         <span>작성 시 유의해 주세요! 비방, 광고, 불건전한 내용의 글은 사전 동의 없이 삭제될 수 있습니다.</span>
//                     </p>                
//                 </div>
//                 <div>
//                     <table>
//                         <tr>
//                             <th>게시물 작성</th>
//                         </tr>
//                     </table>
//                 </div>
//                 <div className='form-wrapper'>
//                   <input className="title-input" type='text' placeholder='제목' onChange={getValue} name='title' />
//                 <CKEditor
//           editor={ClassicEditor}
//           data="<p>자유롭게 글을 작성하세요!</p>"
//           onReady={editor => {
//             console.log('Editor is ready to use!', editor);
//           }}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//             console.log({ event, editor, data });
//             setCreateBoard ({
//                 ...creatBoard,
//                 detail: data
//             })
//             console.log(creatBoard);
//           }}
//           onBlur={(event, editor) => {
//             console.log('Blur.', editor);
//           }}
//           onFocus={(event, editor) => {
//             console.log('Focus.', editor);
//           }}
//         />
//             </div>
//             <button className="submit-button"
//             onClick={onclickUpload}>등록</button>
//             <p className="copy">&#169; Plannet.</p>
//             </Section>
//         </Wrap>
//     )
// };

// export default Create;

// // // // <div className="boardmain"> 
// // // // <div>
// // // //     <h1>자유게시판</h1>
// // // //     <p>뭔가 들어갈 글이 필요하려나? 작성 시 유의해 주세요! 비방, 광고, 불건전한 내용의 글은 사전 동의 없이 삭제될 수 있습니다.</p> 
// // // // </div>
// // // // <br></br>
// // // // <div style={{background:'gray', height:'500px'}}> 
// // // //     <div>
// // // //        제목<input type="text"></input><br></br>
// // // //        작성자<input type="text"></input><br></br>
// // // //     </div>
// // // //     <hr></hr>
// // // //     <div>
// // // //         내용 <br></br>
// // // //         여기에 이제 게시판 관련 플러그인 추가, 위즈윅 에디터, summernote, 리액트로 에디터 구현 등 
// // // //         https://github.com/jpuri/react-draft-wysiwyg
// // // //         https://github.com/channaveer/tutorial-summernote-texteditor
// // // //         no jquery summernote editor
// // // //     </div>
// // // // </div>
// // // // <div>첨부파일</div>
// // // // <br></br>
// // // // <div className='center'>
// // // //     <button>등록</button>
// // // //     <button>취소</button>
// // // // </div>
// // // // </div>
// // // // </div>
// // // // </div>