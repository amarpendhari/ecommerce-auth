import React from 'react'
import OtpInput from 'react-otp-input';
import { FloatingLabel, InputWrapper } from '../compStyles'

const InputOTP = (props: any) => {

    const { label, name, value, validation, onChange, placeholder, error, isDisabled } = props

    return (
        <FloatingLabel>
        {/* <div className={`floating-label ${error ? 'wrong-input' : ''}`}> */}
            <InputWrapper className='otp-wrapper'>
                <label>{label}</label>
                <OtpInput
                    value={value}
                    onChange={onChange}
                    numInputs={8}
                    renderSeparator={<span>  </span>}
                    renderInput={(props) => <input {...props} />}
                />
            </InputWrapper>
            {error ? <span className="error">{error}</span> : null}
        </FloatingLabel>
    )
}

export default InputOTP