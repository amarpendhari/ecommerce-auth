import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const UserNavWrapper = styled.div`
    padding: 0.5rem 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    p {
        font-size: 12px;
        font-weight: 400;
        line-height: 14.52px;
        color: #333;
    }
`

const UserNav = () => {

    const [user, setUser] = useState<any>({})

    useEffect(() => {
        console.log(localStorage.getItem('currentUser'))
        if(localStorage.getItem('currentUser')) setUser(JSON.parse(localStorage.getItem('currentUser') || ''))
    },[])

    return (
        <UserNavWrapper>
            <p>Help</p>
            <p>Orders & Returns</p>
            <p>Hi, {user?.name || 'User'}</p>
        </UserNavWrapper> 
    )
}

export default UserNav