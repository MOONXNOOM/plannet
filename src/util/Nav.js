import styled from "styled-components"

const Nav = () => {
    const usersrc = "https://images.unsplash.com/photo-1666473574427-253b43283677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80";
    const useimg = {backgroundImage: "url(" + usersrc + ")"};
    const username = "사용자";
    const useremail = "aaaa@gmail.com";

    const Box = styled.div`
        width: 280px;
        height: 100vh;
        background-color: white;
        float: left;
        overflow: hidden;
        text-align: center;
        .userImgBox{
            width: 200px;
            height: 200px;
            border-radius: 100%;
            overflow: hidden;
            margin: 0 auto;
            background-size: cover;
        }
    `;
    return (
        <Box>
            <div>
                <h1>Plannet</h1>
                <h2>Let's plan it!</h2>
            </div>
            <div>
                <div className="userImgBox" style={useimg}/>
                <p>{username}</p>
                <p>{useremail}</p>
            </div>
        </Box>
    );
}
export default Nav;