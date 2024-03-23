import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const DashboardWrapper = styled.div`
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
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 25px;
    }
    .checkbox {
        display: flex;
        gap: 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        margin-bottom: 18px;
    }
    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 26px;
        text-align: left;
        margin-bottom: 20px;
    }
    .pagination {
        margin-top: 50px;
    }
`

const Dashboard = () => {

    const listData = [
        { title: 'Shoes', checkbox: true},
        { title: 'Men T-shirts', checkbox: false},
        { title: 'Makeup', checkbox: true},
        { title: 'Jewellery', checkbox: true},
        { title: 'Women T-shirts', checkbox: false},
        { title: 'Furniture', checkbox: true},
    ]

    return (
        <DashboardWrapper>
            <h2>Please mark your interests!</h2>
            <h3>We will keep you notified. List will be integrated soon.</h3>
            <div>
                <p>My saved interests!</p>
                <div>
                    {listData?.map(el => {
                        return (
                            <div key={el?.title} className='checkbox'>
                                <Image src={`/assets/${el?.checkbox ? 'checkbox' : 'checkbox-disable'}.svg`} width={24} height={24} alt='pagination' />
                                {el?.title}
                            </div>
                        )
                    })}
                    <div className='pagination'>
                        <Image src={`/assets/pagination.svg`} width={293} height={26} alt='pagination' />
                    </div>
                </div>
            </div>
        </DashboardWrapper> 
    )
}

export default Dashboard