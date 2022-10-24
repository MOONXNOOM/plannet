import { Link } from "react-router-dom";
import ExMain from "../MainHome/Main";

const Home = () => {
    return (
        <>
            <ExMain/>
            <Link to="/Write"> 글쓰기 </Link>
        </>    
        
    );
}
export default Home;