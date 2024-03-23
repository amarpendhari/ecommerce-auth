import styled, { css } from 'styled-components'

interface BtnProps {
    marginBottom?: string;
}

const Button = styled.button<BtnProps>`
    letter-spacing: 0.4px;
    font-family: "Sofia Pro";
    margin: auto;
    width: 100%;
    padding: 18px;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all .3s;
    text-decoration: none;
    &:hover {
        transform: translateY(-2px);
    }
`

const ButtonPrimary = styled(Button)<BtnProps>`
    background-color: black;
    color: white;
`

const ButtonOutlinePrimary = styled(Button)<BtnProps>`
    border: 1px solid black;
    background-color: white;
    color: black;
`

const ButtonDisabled = styled(Button)<BtnProps>`
    background-color: transparent;
    cursor: none;
    pointer-events: none;
    color: white;
`

export {
    ButtonPrimary, ButtonOutlinePrimary, ButtonDisabled
}