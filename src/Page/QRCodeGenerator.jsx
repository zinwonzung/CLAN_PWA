import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import Camera from '../img/camera1.jpeg';
import Star from '../img/Star2.png';

function QRCodeGenerator() {
  const [text, setText] = useState('');
  const [showCamera, setShowCamera] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleScan = () => {
    // QR 코드 스캔 시 처리
  };

  const handleCameraClick = async () => {
    try {
      // 미디어 스트림 요청
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      // video 요소 생성 후 미디어 스트림 연결
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();
      // video 요소 표시
      setShowCamera(true);
    } catch (error) {
      console.error('Failed to access camera', error);
    }
  };

  return (
    <div>
    <div>
      <img
        src={Star} width="10%" height="120"/>
        
    </div>
    <div>
     
      {showCamera && (
        <div style={{ marginTop: '16px' }}>
          <video style={{ width: '100%' }} onScan={handleScan} />
        </div>
      )}
      {!showCamera && (
        <Button onClick={handleCameraClick} style={{fontSize: '20px', marginTop: '20px' }}variant="light">
           <img
          src={Camera}
          width="60"
          height="60"/>
          
          
        </Button>
        
      )}
      <p>카메라</p>
    </div>
    </div>
  );
}

export default QRCodeGenerator;
