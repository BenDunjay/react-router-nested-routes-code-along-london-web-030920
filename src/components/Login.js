import React from 'react'

export default function Login(props) {
    return (
        <div>
            <form>
        <div>
          <input type="text" name="username" placeholder="Username" value={props.username} onChange={props.changeUsernameOrPassword }/>
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" value={props.password} onChange={props.changeUsernameOrPassword}/>
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
        </div>
    )
}
