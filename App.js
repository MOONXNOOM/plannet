import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Write from './write/Write';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/write" element={<Write />}/>
      </Routes>
    </Router>
  );
}

export default App;
