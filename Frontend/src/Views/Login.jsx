import React, { useState } from 'react'
import { useLogin } from '../Hooks/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <div className='page'>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Log In</h3>
        <label htmlFor="email">Email: </label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={isLoading}>Log In</button>

        {error && <div className='error'>{error}</div>}

      </form>
    </div>
  )
}

export default Login