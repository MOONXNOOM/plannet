
import axios from "axios";
const HEADER = 'application/json';
const PLANNET_DOMAIN = "http://localhost:8090/Plannet_servlet/";

const plannetApi = {
    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        };
        return await axios.post(PLANNET_DOMAIN + "LoginServlet", loginObj, HEADER);
    },
    // 회원 가입
    memberReg: async function(id, pwd, name, nickname, email, tel, join_date) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            nickname: nickname,
            email: email,
            tel: tel,
            join_date: join_date
        };
        return await axios.post(PLANNET_DOMAIN + "MemberRegServlet", memberObj, HEADER);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async function(uni, type) {
        const regCheck = {
            uni: uni,
            type: type
        };
        return await axios.post(PLANNET_DOMAIN + "MemberCheck", regCheck, HEADER);
    },
    // 회원 탈퇴
    memberDelete: async function(id) {
        const memberObj = {
            id: id,
        };
        return await axios.post(PLANNET_DOMAIN + "MemberDelete", memberObj, HEADER);
    },
    // 회원 아이디, 비밀번호 찾기
    memberFind: async function(uni, email, type){
        const reg = {
            uni : uni,
            email : email,
            type : type
        };
        return await axios.post(PLANNET_DOMAIN + "MemberFind", reg, HEADER);
    },
    // 새 비밀번호 저장
    memberNewPwd: async function(id, pwd){
        const reg = {
            id : id,
            pwd : pwd
        };
        return await axios.post(PLANNET_DOMAIN + "MemberNewPwd", reg, HEADER);
    },
    // 회원 메모 조회
    memberMemo: async function(id) {
        const object = {
            id : id
        };
        return await axios.post(PLANNET_DOMAIN + "MemberMemo", object, HEADER);
    },
    // 회원 메모 저장
    memberMemoSave: async function(id, memo) {
        const object = {
            id: id,
            memo: memo
        };
        return await axios.post(PLANNET_DOMAIN + "MemberMemoSave", object, HEADER);
    },
    // 명언 랜덤 출력
    quoteRandom: async function(num) {
        const object = {
            num: num,
        };
        return await axios.post(PLANNET_DOMAIN + "QuoteRandom", object, HEADER);
    },
    // 플랜리스트.다이어리 저장
    writeSave: async function(id, date, planList, diary) {
        const object = {
            id: id,
            date: date,
            plan: planList,
            diary: diary
        };
        return await axios.post(PLANNET_DOMAIN + "WriteSave", object, HEADER);
    }, 
    // 플랜리스트.다이어리 로드
    writeLoad: async function(id, date) {
        const object = {
            id: id,
            date: date
        };
        return await axios.post(PLANNET_DOMAIN + "WriteLoad", object, HEADER);
    },
    // 자유게시판 목록 출력
    boardList: async function(){
        const object = {
            cmd : "boardList"
        };
        return await axios.post(PLANNET_DOMAIN + "BoardList", object, HEADER);
    },
    // 자유게시판 글 작성
    boardCreate: async function(id, title, detail, isChecked){
        const object = {
            id : id,
            title : title,
            detail : detail,
            isChecked : isChecked
        };
        return await axios.post(PLANNET_DOMAIN + "BoardCreate", object, HEADER);
    },
    // 글 조회수 
    boardViews:async function(num){
        const object = {
            num: num
        };
        return await axios.post(PLANNET_DOMAIN+ "BoardViews", object, HEADER);
    },
    // 게시판 내용보기
    boardLoad: async function(num){
        const object = {
            num : num
        };
        return await axios.post(PLANNET_DOMAIN + "BoardLoad", object, HEADER);
    },
    // 글 삭제
    boardDelete: async function(num) {
        const object = {
            num: num
        };
        return await axios.post(PLANNET_DOMAIN + "BoardDelete", object, HEADER);
    },
    // 글 수정
    boardEdit: async function(id, num, title, detail) {
        const object = {
            id: id,
            num: num,
            title: title,
            detail: detail
        };
        return await axios.post(PLANNET_DOMAIN + "BoardEdit", object, HEADER);
    },
    // 좋아요 수 불러오기
    likeCnt: async function(id, num) {
        const object = {
            id: id,
            num: num
        };
        return await axios.post(PLANNET_DOMAIN + "LikeCnt", object, HEADER);
    },
    // 해당 게시물에 좋아요를 눌렀는지 체크
    likeChecked: async function(id, num) {
        const object = {
            id: id,
            num: num
        };
        return await axios.post(PLANNET_DOMAIN + "LikeChecked", object, HEADER);
    },
    // 해당 게시물에 댓글 작성
    commentCreate: async function(comment_no){
        const object = {
            comment_no:comment_no
        };
        return await axios.post(PLANNET_DOMAIN + "CommentCreate", object, HEADER);
    },
    // userInfo 불러오기
    userInfoLoad: async function(id){
        const object = {
            id:id
        };
        return await axios.post(PLANNET_DOMAIN + "UserInfoLoad", object, HEADER);
    },
    // userInfo 저장하기
    userInfoSave: async function(id, nickname, email, phone, sns, profile) {
        const object = {
            id: id,
            nickname: nickname,
            email: email,
            phone: phone,
            sns: sns,
            profile: profile
        };
        return await axios.post(PLANNET_DOMAIN + "UserInfoSave", object, HEADER);
    },
    userImgSave: async function(id, imgName) {
        const object = {
            id: id,
            imgName: imgName
        };
        return await axios.post(PLANNET_DOMAIN + "UserImgSave", object, HEADER);
    },
    // 달성률
    userDo: async function(id) {
        const object = {
            id: id
        };
        return await axios.post(PLANNET_DOMAIN + "UserDo", object, HEADER);
    },
    // 달력
    planMark: async function(id) {
        const object = {
            id: id
        };
        return await axios.post(PLANNET_DOMAIN + "PlanMark", object, HEADER);
    },
    // 주간일정 출력
    weekList: async function(id) {
        const object = {
            id: id
        }
        return await axios.post(PLANNET_DOMAIN + "WeekList", object, HEADER);
    }
}

export default plannetApi;


