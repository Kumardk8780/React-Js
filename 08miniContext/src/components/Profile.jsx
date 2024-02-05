import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user,count} = useContext(UserContext);

  if(!user) return <div>Please Login</div>

  return <div>Welcome, {user.username} {count} </div>
}

export default Profile