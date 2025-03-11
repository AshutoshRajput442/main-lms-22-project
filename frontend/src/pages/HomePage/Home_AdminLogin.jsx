// import React from "react";
// import "./Home_admin_login.css";

// const Home_AdminLogin = () => {
//   return (
//     <div className="login-box admin-login">
//       <h2>Admin Login</h2>
//       <form>
//         <label>Admin ID</label>
//         <input type="text" placeholder="Enter User ID" />
//         <label>Admin Password</label>
//         <input type="password" placeholder="Enter Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Home_AdminLogin;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home_admin_login.css";

const Home_AdminLogin = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const loginData = {
      login_id: loginId,
      password: password,
    };

    try {
      const response = await fetch("https://golang-77sp.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Login successful");
        console.log("Success:", data);
        navigate("/First");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Network error, please try again");
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-box admin-login">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Admin ID</label>
        <input
          type="text"
          placeholder="Enter User ID"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          required
        />
        <label>Admin Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Home_AdminLogin;
