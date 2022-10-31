import { Link } from "react-router-dom";
import ExMain from "../Main/Main";

const Home = () => {
    return (
        <>
            <ExMain/>
            <Link to="/Write">글쓰기</Link>
            <Link to="/Create">자유게시판2</Link>
        </>    
        
    );
}
export default Home;