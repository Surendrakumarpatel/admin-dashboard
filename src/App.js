import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './Dashboard';

 
function App() {

  const [user, setUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
   

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard/>} />
          <Route path="/" element={<Login setUser={setUser} setLoggedIn={setLoggedIn} />} />
          <Route path="*" element={<>Page Not found!</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
