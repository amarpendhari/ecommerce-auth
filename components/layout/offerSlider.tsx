import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const OfferSliderWrapper = styled.div`
    padding: 0.3rem;
    background: #F4F4F4;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: auto;
        max-width: 500px;
    }
`

const OfferSlider = () => {
    return (
        <OfferSliderWrapper>
            <div>
                <Image src={`/assets/left-arrow.svg`} width={6} height={11} alt={`left`} /> 
                <p>Get 10% off on business sign up</p>
                <Image src={`/assets/right-arrow.svg`} width={6} height={11} alt={`right`} /> 
            </div>
        </OfferSliderWrapper> 
    )
}

export default OfferSlider