import React, { useState } from 'react'
import { FloatingLabel, InputWrapper } from '../compStyles'

const PasswordInput = (props: any) => {
    const [type, setType] = useState('password')
    const { label, name, value, onChange, validation, placeholder, error } = props

    const changePassword = () => {
        if(type === 'text') {
            setType('password')
        } else {
            setType('text')
        }
    }

    return (
        <FloatingLabel>
        {/* <div className={`floating-label ${error ? 'wrong-input' : ''}`}> */}
            <InputWrapper>
                <label>{label}</label>
                <div className='password-input'>
                    <input className="floating-input" onChange={onChange} value={value} autoComplete="off" name={name||""} type={type} placeholder={placeholder||"Enter"} />
                    <a className={`password-eye ${type === 'password' ? 'password' : ''}`} onClick={changePassword}>{type === 'password' ? 'Show' : 'Hide'}</a>
                </div>
            </InputWrapper>
            {error ? <span className="error">{error}</span> : null}
        </FloatingLabel>
    )
}

export default PasswordInput