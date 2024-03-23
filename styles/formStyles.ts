import styled, { css } from "styled-components";

const FormWrapper    = styled.div`
    border-radius: 25px;
    background: white;
    padding: 3rem;
    max-width: 500px;
    margin: auto;
    text-align: center;
    border: 1px solid #e1e1e1;
    margin-top: 3rem;
    margin-bottom: 5rem;
    h2 {
        font-size: 32px;
        font-weight: 600;
        line-height: 38.73px;
        margin-bottom: 25px;
    }
    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 29.05px;   
        margin-bottom: 15px;     
    }
    h4 {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        margin-bottom: 15px;    
    }
    p.desc {
        span {

        }
    }
    .form-nav {
        margin-top: 30px;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        a {
            font-weight: 500;
        }
    }
`

export {
    FormWrapper 
}