import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';
import { Button } from 'react-bootstrap';

function Mileage() {
  return (
    <div className="Mileage" style={{textAlign: 'center', marginTop: '50px'}}>
      <Routes>
        <Route path="/Login" element={<div>Login</div>}/>
        <Route path="/Signup" element={<div>Signup</div>}/>
        <Route path="/Mileage" element={<Mileage />} />
      </Routes>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px'}}>
        <Link to='/'>
          <div style={{position: 'absolute', top: '4%', left: '4%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '2rem', cursor: 'pointer'}}>PL AN</div>
        </Link>
      </div>
      <h1 style={{marginTop: '30px'}}><h2>마일리지</h2></h1>
      <h2>Your Mileage Score:</h2>
      <h1>QR코드를 스캔하세요</h1>
      <QRCodeGenerator />
      <h3>
        <Link to='/'>
          {/* <div style={{position: 'absolute', top: '5%', left: '50%', transform: 'translate(-50%, -50%)', color: 'black', fontSize: '2.5rem', cursor: 'pointer', marginTop: '300px'}}>
            1000점 
          </div> */}
        </Link>
      </h3>
    </div>
  );
}

export default Mileage;
