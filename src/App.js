// export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Write from './Write/Write';
import ExMain from './Main/Main';
import Board from './Board/Board';
import Create from './Board/Create';
import DoLogin from './DoLogin/DoLogin';
import Join from './Join/Join';
import MainHome from './MainHome/MainHome';
import Memo from './MainHome/Memo';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/main" element={<ExMain />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/board" element={<Board />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/dologin" element={<DoLogin />}/>
        <Route path="/join" element={<Join />}/>
        {/* <Route path="/loginHome" element={<LoginHome />}/> */}
        <Route path="/MainHome" element={<MainHome />}/>
        <Route path="/Memo" element={<Memo />}/>
        <Route path="/loginHome" element={<MainHome />}/>
      </Routes>
    </Router>
  );
}

export default App;
