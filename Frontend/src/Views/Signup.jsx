import React, { useState, useEffect } from 'react'
import { useSignup } from '../Hooks/useSignup';
import { useAuthContext } from '../Hooks/useAuthContext';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);

    setUsername('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className='page'>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <label htmlFor="username">Username: </label>
        <input
          type='text'
          name='username'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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

        <button type="submit" disabled={isLoading}>Sign Up</button>

        {error && <div className='error'>{error}</div>}

      </form>
    </div>
  )
}

export default Signup