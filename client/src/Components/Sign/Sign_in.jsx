import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./Sign.css"

export default function Sign_in() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const responseData = await response.json();
        if (!response.ok) {
            alert(responseData.message || 'Signup failed');
        }
        else{
          alert('Signup successful');
          navigate(responseData.isadmin?'/admin/*':`/memberdash?memberId=${responseData.id}`);
        }
      } catch (error) {
        alert('Signup error:', error.message);
    }
};
  return (
    <>
      <main class="signmain">
            <div class="loginboxi">
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div class="input_box input_boxi"><input type="email" placeholder="Username"onChange={(e)=>setEmail(e.target.value)}  required/></div>
                    <div class="input_box input_boxi"><input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/></div>
                    <button type="submit">Login</button>
                    <p>Dont have an account? <a href="/signup">Sign Up</a></p>
                </form>
            </div>
        </main>
    </>
  )
}
