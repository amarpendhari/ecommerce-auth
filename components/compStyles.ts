import styled, { css } from "styled-components";

const FloatingLabel = styled.div`
    margin-bottom: 25px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    .error {
        color: red;
        font-size: 12px;
    }
`
const InputWrapper = styled.div`
    label {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
    }
    input {
        border-radius: 8px;
        padding: 5px 30px;
        background-color: transparent;
        border: 1px solid #e1e1e1;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        padding: 8px 12px;
        width: 100%;
        &:focus-visible {
            outline: none;
        }
    }
    &.otp-wrapper {
        div {
            gap: 7px;
        }
        input {
            width: 2.4rem !important;
        }
    }
    .password-input {
        position: relative;
        a {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
        }
    }
`

export {
    FloatingLabel,
    InputWrapper
}