import { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 로그인 처리를 하는 코드 작성
    console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <div className="form-container">
      <Link to='/'>
          <div style={{position: 'absolute', top: '4%', left: '4%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '2rem', cursor: 'pointer'}}>PL AN</div>
        </Link>
        
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Phone:</label>
          <input type="Phone" className="input" value={email} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to='/Mileage'> {/* "/Mileage" 경로로 이동하는 Link */}
        <Button variant="dark" style={{backgroundColor: 'white', color: 'black', fontSize: '0.5rem', padding: '0.5rem 9rem'}}>임시 마일리지 페이지 </Button>
        </Link>
        </div>
    </div>
  );
}

export default Login;
