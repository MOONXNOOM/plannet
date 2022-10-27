// export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Write from './write/Write';
// import Writecopy from './write/Write_copy';
import ExMain from './MainHome/Main';
import Board from './Board/Board';
import Create from './Board/Create';
import DoLogin from './DoLogin/DoLogin';
import Join from './Join/Join';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/main" element={<ExMain />}/>
        {/* <Route path="/write" element={<Writecopy />}/> */}
        <Route path="/write" element={<Write />}/>
        <Route path="/board" element={<Board />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/doLogin" element={<DoLogin />}/>
        <Route path="/join" element={<Join />}/>
        <Route parh="/loginHome" element={<LoginHome />}/>
      </Routes>
    </Router>
  );
}

export default App;
