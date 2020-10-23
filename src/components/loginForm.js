import React from 'react'

export const LoginForm = ({handleLogin, password, inputHandler, username}) => {
    return(
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    username: 
                    <input type="text"
                    value = {username}
                    onChange = {inputHandler}
                    name="Username"
                    />
                </div>
                
                <div>
                    password: 
                    <input type="password"
                    value = {password}
                    onChange = {inputHandler}
                    name="Password"
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm