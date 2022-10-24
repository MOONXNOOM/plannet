import { Link } from "react-router-dom";
import ExMain from "../MainHome/Main";

const Home = () => {
    return (
        <>
            <ExMain/>
            <Link to="/Write">글쓰기</Link>
            <Link to="/DoLogin"> 로그인 </Link>
            <Link to="/Board">자유게시판</Link>
        </>    
        
    );
}
export default Home;