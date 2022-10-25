import axios from "axios";
const HEADER = 'application/json';
// 본인 도메인으로 변경해야합니다
const KH_DOMAIN = "http://localhost:8090/kh_mini_ex/";

const Api = {
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(KH_DOMAIN + "LoginServlet", loginObj, HEADER);
    },
}

export default Api;