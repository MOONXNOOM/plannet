
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           dsdas
//           Test -오민찬
//           Test - 이찬영
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
// import Write from './Write/Write';
import ExMain from './MainHome/Main';
import Board from './Board/Board';
import Create from './Board/Create';
import DoLogin from './DoLogin/DoLogin';
import Join from './Join/Join';
import Writecopy from './write/Write_copy';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/main" element={<ExMain />}/>
        <Route path="/write" element={<Writecopy />}/>
        <Route path="/board" element={<Board />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/doLogin" element={<DoLogin />}/>
        <Route path="/join" element={<Join />}/>
      </Routes>
    </Router>
  );
}

export default App;
