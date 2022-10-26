import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Write from './write/Write';
import ExMain from './MainHome/Main';
import Board from './board/Board';
import Create from './board/Create';
import DoLogin from './DoLogin/DoLogin';
import Join from './Join/Join';
// 연습

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/main" element={<ExMain />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/board" element={<Board />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/doLogin" element={<DoLogin />}/>
        <Route path="/join" element={<Join />}/>
      </Routes>
    </Router>
  );
}

export default App;
