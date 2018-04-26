import React from 'react';

let UserIcon = ({user}) => 
    <div className='user-icon'>
        <img src='/images/wolverine' alt='user'/>
        <p>{user.username}</p>
    </div>

export default UserIcon;