import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Mainpic from './img/Dreamscape.jpeg';
import Mileage from './Page/Mileage'; // Mileage 컴포넌트 import
import Login from './Page/Login';
import './MainPage.css';


function MainPage() {
  return (
    <div className="MainPage">
      <Routes>
        <Route path="/" element={<div>Main page</div>}/>
        <Route path="/Login" element={<div>Login</div>}/>
        <Route path="/Signup" element={<div>Signup</div>}/>
        <Route path="/mileage" element={<Mileage />} /> {/* Mileage 컴포넌트 렌더링 */}
        
      </Routes>
      
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', position: 'relative'}}>
        <Link to='/'>
          <div style={{position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '3.5rem', cursor: 'pointer'}}>CL AN</div>
        </Link>
        <img
          src={Mainpic}
          width="100%"
          height="500"
          className="d-inline-block align-top"
          alt="Trash logo"
        />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to='/Signup'> {/* "/Mileage" 경로로 이동하는 Link */}
        <Button variant="dark" style={{backgroundColor: 'black', color: 'white', fontSize: '1rem', padding: '0.5rem 2rem'}}>Signup</Button>
        </Link>
        
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to='/Login'> {/* "/Mileage" 경로로 이동하는 Link */}
          <Button variant="dark" style={{backgroundColor: 'black', color: 'white', fontSize: '1rem', padding: '0.5rem 2.3rem'}}>Login </Button>
        </Link>

      </div>
    </div>
  );
}

export default MainPage;
