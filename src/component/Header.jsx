import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {

    const { user, logOut, googleLogin } = useContext(AuthContext);

    const signOut = () => {
        logOut()
    }

    const handleGoogleLogin = () => {
        googleLogin()
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={signOut} className='btn btn-primary'>Sign out</button>
                    </>
                        : <button className='btn btn-primary'>
                            <Link to='/login'>Login in</Link>
                        </button>
                }

                <button onClick={handleGoogleLogin} className="btn btn-secondary">Button</button>
            </div>
        </div>
    );
};

export default Header;