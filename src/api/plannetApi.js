import axios from "axios";
const HEADER = 'application/json';
const PLANNET_DOMAIN = "http://localhost:8090/Plannet/";

const plannetApi = {
    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(PLANNET_DOMAIN + "LoginServlet", loginObj, HEADER);
    },
    // 회원 정보 조회
    memberInfo: async function() {
        const regCmd = {
            cmd : "MemberInfo"
        }
        return await axios.post(PLANNET_DOMAIN + "member", regCmd, HEADER);
    },
    // 회원 가입
    memberReg: async function(id, pwd, name, nickname, email, tel, birth, join_date ) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            nickname: nickname,
            email: email,
            tel: tel,
            birth: birth,
            join_date: join_date
        };
        return await axios.post(PLANNET_DOMAIN + "memberReg", memberObj, HEADER);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async function(id) {
        const regCheck = {
            id: id,
        }
        return await axios.post(PLANNET_DOMAIN + "memberCheck", regCheck, HEADER);
    }
}

export default plannetApi;