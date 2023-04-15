import { useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 처리를 하는 코드 작성
    console.log(`Email: ${email}, Password: ${password}, Name: ${name}, Phone: ${phone}`);
  }

  return (
    <div className="form-container">
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Phone:</label>
          <input className="input" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <button className="button" type="submit">Signup</button>
      </form>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to='/'> {/* "/Mileage" 경로로 이동하는 Link */}
        <Button variant="dark" style={{backgroundColor: 'white', color: 'black', fontSize: '0.5rem', padding: '0.5rem 9rem'}}>Home</Button>
        </Link>
        </div>
    </div>
  );
}

export default Signup;
