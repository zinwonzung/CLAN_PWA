import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Mileage from './Page/Mileage';
import Login from './Page/Login';
import Signup from './Page/Signup';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/mileage" element={<Mileage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
