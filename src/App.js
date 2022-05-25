import { useState } from 'react'
import './App.css';
import Jokes from './Jokes';
import Dashboard from './Dashboard';
import { Route, Routes,useNavigate, Navigate } from 'react-router-dom';
import Login from './Login';




function App() {
  let navigate = useNavigate();

  const[user, setUser] = useState(null);

  const logIn = (e) => {
    e.preventDefault();
    setUser(true);
    navigate('/dashboard');

  }
  const logOut = () => {
    setUser(false);
    navigate("/");
  }
  return (
    <div className="App">
    <div className="outer">
      <div className="inner">
        <Routes>
          {!user && (
           <Route path="/" element={<Login logIn={ logIn }/>} />
          )}

          {user && (
            <>
            <Route path="/dashboard" element={<Dashboard logOut={logOut}/>}/>
             <Route path="/jokes" element={<Jokes />} />
             </>
          )}
        <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} />} />
      </Routes>
      </div>
    </div>
  </div>
  );
}

export default App;
