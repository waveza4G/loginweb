import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // เพิ่มฟังก์ชันสมัครสมาชิกที่นี่ (เช่น ส่งข้อมูลไปยัง API)

        // นำผู้ใช้ไปยังหน้าแดชบอร์ดหลังการสมัครสำเร็จ
        navigate('/dashboard');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div style={{ width: '400px', height: '500px', padding: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>สมัครสมาชิก</h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>ชื่อผู้ใช้:</label>
                        <input type="text" placeholder="กรอกชื่อผู้ใช้ของคุณ" style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>อีเมล:</label>
                        <input type="email" placeholder="กรอกอีเมลของคุณ" style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>รหัสผ่าน:</label>
                        <input type="password" placeholder="กรอกรหัสผ่านของคุณ" style={{ width: '100%', padding: '10px', marginTop: '5px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '5px' }} />
                    </div>
                    
                    <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }}>
                        สมัครสมาชิก
                    </button>
                </form>
                
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <span>มีบัญชีอยู่แล้วใช่ไหม? </span>
                    <Link to="/login" style={{ color: '#4CAF50', textDecoration: 'none', marginLeft: '5px' }}>เข้าสู่ระบบ</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
