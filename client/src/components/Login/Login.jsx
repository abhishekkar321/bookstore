import React, { useState } from 'react'

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if(email === "admin@test.com" && password === "1234"){
      alert("Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={styles.container}>

      {/* Header */}
      <header style={styles.header}>
        <h1 id="logo">📚 BookStore</h1>
      </header>

      {/* Login Form */}
      <div style={styles.loginBox}>
        <h2 id="loginTitle">Login</h2>

        <form onSubmit={handleLogin}>

          <input
            id="emailInput"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={styles.input}
            required
          />

          <input
            id="passwordInput"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button id="loginBtn" type="submit" style={styles.button}>
            Login
          </button>

        </form>

        <p id="registerText">
          Don't have an account? <a href="/register">Register</a>
        </p>

      </div>

      {/* Footer */}
      <footer id="footer" style={styles.footer}>
        © 2026 BookStore. All rights reserved.
      </footer>

    </div>
  )
}

const styles = {

  container:{
    fontFamily:'Arial',
    textAlign:'center'
  },

  header:{
    backgroundColor:'#153388',
    color:'#fff',
    padding:'15px'
  },

  loginBox:{
    width:'350px',
    margin:'60px auto',
    padding:'30px',
    boxShadow:'0 0 10px #ccc',
    borderRadius:'8px'
  },

  input:{
    width:'100%',
    padding:'10px',
    margin:'10px 0',
    fontSize:'16px'
  },

  button:{
    width:'100%',
    padding:'10px',
    backgroundColor:'#153388',
    color:'#fff',
    border:'none',
    cursor:'pointer'
  },

  footer:{
    backgroundColor:'#153388',
    color:'#fff',
    padding:'15px',
    marginTop:'40px'
  }
}

export default Login;