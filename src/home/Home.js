import { Link } from "react-router-dom";
import ExMain from "../MainHome/Main";

const Home = () => {
    return (
        <>
            <ExMain/>
            <Link to="/Write">글쓰기</Link>
            <Link to="/Board2">자유게시판2</Link>
        </>    
        
    );
}
export default Home;