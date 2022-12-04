import React from 'react';

const UserInfo = (props) => {
    return (
        <div className='user-info-container'>
            <div>
                <p className='user-icon'>{props.userInitials}</p>
                <p className='username'>{props.username}</p>
                <p className='user-tag'>{props.userTag}</p>
            </div>
        </div>
    )
};

export default UserInfo;