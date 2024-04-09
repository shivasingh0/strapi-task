import './App.css';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import Verifying from './pages/Verifying';
import Home from './pages/Home';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/login' element={ <Login/> } />
        <Route path='/verify' element={ <Verifying /> } />
        <Route path='/' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
