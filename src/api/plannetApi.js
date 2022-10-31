import axios from "axios";
const HEADER = 'application/json';
const PLANNET_DOMAIN = "http://localhost:8090/Plannet_servlet/";

const plannetApi = {
    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
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
            // birth: birth,
            join_date: join_date
        };
        return await axios.post(PLANNET_DOMAIN + "MemberRegServlet", memberObj, HEADER);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async function(uni, type) {
        const regCheck = {
            uni: uni,
            type: type
        }
        return await axios.post(PLANNET_DOMAIN + "MemberCheck", regCheck, HEADER);
    },
    // 회원 메모 조회
    memberMemo: async function(id) {
        const object = {
            id : id
        }
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
    // 회원 탈퇴
    memberDelete: async function(id) {
        const regCheck = {
            id: id,
        }
        return await axios.post(PLANNET_DOMAIN + "MemberDeleteServlet", regCheck, HEADER);
    },
    // 회원 아이디 찾기
    memberFindId: async function(name, tel){
        const reg = {
            name : name,
            tel : tel
        }
        return await axios.post(PLANNET_DOMAIN + "MemberFindIdServlet", reg, HEADER);
    },
    // 회원 비밀번호 찾기
    memberFindPwd: async function(id, tel){
        const reg = {
            id : id,
            tel : tel
        }
        return await axios.post(PLANNET_DOMAIN + "MemberFindPwdServlet", reg, HEADER);
    }
}

export default plannetApi;


