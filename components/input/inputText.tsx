import React from 'react'
import { FloatingLabel, InputWrapper } from '../compStyles'

const TextInput = (props: any) => {

    const { label, name, value, validation, onChange, placeholder, error, isDisabled } = props

    return (
        <FloatingLabel>
        {/* <div className={`floating-label ${error ? 'wrong-input' : ''}`}> */}
            <InputWrapper>
                <label>{label}</label>
                <input disabled={isDisabled} className="floating-input" value={value} onChange={(e) => onChange ? onChange(e) : {}} autoComplete="off" name={name||""} type="text" placeholder={placeholder|| "Enter"} />
            </InputWrapper>
            {error ? <span className="error">{error}</span> : null}
        </FloatingLabel>
    )
}

export default TextInput