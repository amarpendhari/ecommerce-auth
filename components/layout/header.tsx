import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ButtonPrimary } from '../button/button';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Image from 'next/image';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    background: white;
    .logo-text {
        font-size: 32px;
        font-weight: 700;
        line-height: 38.73px;
    }
    ul {
        gap: 25px;
        li {
            font-size: 16px;
            font-weight: 600;
            line-height: 19.36px;
        }
    }
`
const BtnWrapper = styled.header`
    display: flex;
    gap: 15px;
`

const Header = (props: any) => {

    const { logged } = props
    const router = useRouter()

    const logout = () => {
        toast.success('User Logged Out')
        localStorage.removeItem("currentUser");
        router.push('/auth/login')
    }

    console.log('logged', logged)

    return (
        <HeaderWrapper>
            <div className='flex logo-text'>
                ECOMMERCE
            </div>
            {logged
            ? <div>
                <ul className='flex'>
                    <li>Categories</li>
                    <li>Sale</li>
                    <li>Clearance</li>
                    <li>New Stock</li>
                    <li>Trending</li>
                </ul>
            </div>
            : null}
            {logged 
            ? <BtnWrapper>
                <Image src={`/assets/search.svg`} width={20} height={20} alt={`search`} /> 
                <Image src={`/assets/cart.svg`} width={20} height={20} alt={`search`} /> 
                <a className='button btn-primary' onClick={() => logout()}>Logout</a>
            </BtnWrapper>
            : <BtnWrapper>
                <Link className='button btn-primary' href={`/auth/login`}>Login</Link>
                <Link className='button btn-primary' href={`/auth/register`}>Register</Link>
            </BtnWrapper>}
        </HeaderWrapper> 
    )
}

export default Header