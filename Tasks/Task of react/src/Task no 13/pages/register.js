import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className="register-container">
    
      <form className="register-form" action="#" method="post">
          <h1>Register</h1>
          <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
        />
        <button type="submit">Register</button>
      
      <p className="login-link">
        Already have an account? <Link to="/login">Login here</Link>
      </p>
      </form>
    </div>
  );
}

export default Register;
