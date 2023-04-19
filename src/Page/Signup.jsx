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
      <Link to='/'>
          <div style={{position: 'absolute', top: '4%', left: '4%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '2rem', cursor: 'pointer'}}>PL AN</div>
        </Link>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Phone:</label>
          <input className="input" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <button className="button" type="submit">Signup</button>
      </form>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        </div>
        
    </div>
  );
}

export default Signup;
