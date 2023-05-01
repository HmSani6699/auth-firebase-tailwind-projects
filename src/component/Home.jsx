import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Home = () => {
    const user=useContext(AuthContext)
    return (
        <div>
            {user && <p>{user.displayName}</p>}
        </div>
    );
};

export default Home;