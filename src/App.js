import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Write from './Write/Write';
import Board from './Board/Board';
import DoLogin from './DoLogin/DoLogin';
import Join from './Join/Join';
import Main from './Main/Main';
import Home from './Home/Home';
import Find from './Join/Find';
import Create from './Board/Create';
import Setting from './Setting/Setting';
import PostView from './Board/PostView';
import PublicRoute from './Lib/PublicRoute';
import PrivateRoute from './Lib/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PublicRoute><Main /></PublicRoute>}/>
        <Route path='/doLogin' element={<PublicRoute><DoLogin /></PublicRoute>}/>
        <Route path='/join' element={<PublicRoute><Join /></PublicRoute>}/>
        <Route path='/find' element={<PublicRoute><Find /></PublicRoute>}/>

        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>}/>
        <Route path="/write" element={<PrivateRoute><Write /></PrivateRoute>}/>
        <Route path="/setting" element={<PrivateRoute><Setting /></PrivateRoute>}/>
        <Route path="/board" element={<PrivateRoute><Board /></PrivateRoute>}/>
        <Route exact path='/postView/:no' element={<PrivateRoute><PostView /></PrivateRoute>}/>
        <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>}/>

        {/* <Route path="/" element={<Main />}/>
        <Route path="/doLogin" element={<DoLogin />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="/find" element={<Find />}/>

        <Route path="/home" element={<Home />}/>
        <Route exact path='/write/:date' element={<Write />} />
        <Route path="/setting" element={<Setting />}/>
        <Route path="/board" element={<Board />}/>
        <Route exact path='/postView/:no' element={<PostView />}/>
        <Route path="/create" element={<Create />}/> */}
      </Routes>
    </Router>
  );
}

export default App;
