import { Link } from "react-router-dom";
import ExMain from "../MainHome/Main";

const Home = () => {
    return (
        <>
            <Link to="/Write"> 글쓰기 </Link>
            <ExMain/>
        </>    
        
    );
}
export default Home;