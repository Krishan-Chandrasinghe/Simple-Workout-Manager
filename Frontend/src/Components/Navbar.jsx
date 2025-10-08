import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from '../Hooks/useLogout';
import { useAuthContext } from '../Hooks/useAuthContext';

function Navbar() {

    const { user } = useAuthContext();

    const { logout } = useLogout();

    const handleClick = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure?')) logout();
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout Buddy</h1>
                </Link>
                <nav>
                    <div style={!user ? { display: 'none' } : {}}>
                        <p>{user?.username || ''}</p>
                        <button onClick={handleClick}>Logout</button>
                    </div>
                    <div style={user ? { display: 'none' } : {}}>
                        <Link to={'/signup'} >Sign Up</Link>
                        <Link to={'/login'} >Log In</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar