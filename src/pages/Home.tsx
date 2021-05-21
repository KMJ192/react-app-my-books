import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { logout } from '../redux/modules/auth';
import { RootState } from '../types'


function Home() {
    const dispatch = useDispatch();
    const token = useSelector<RootState, string | null>(
        (state) => state.auth.token
    );
    
    if(token === null){
        return <Redirect to="/Signin" />
    }

    function click() {
        dispatch(logout());
    }
    return (
        <div>
            <button onClick={click}>logout</button>
        </div>
    )
}

export default Home
