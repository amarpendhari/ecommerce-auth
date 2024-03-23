import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import Header from './header'
import OfferSlider from './offerSlider';
import UserNav from './userNav';

const MainLayout = styled.div`
    height: 100%;
    width: 100%;
`
const PageBody = styled.div`
`
const MainContent = styled.div`
`

const AppLayout = (props: any) => {
    
    const { children, title } = props
    const [logged, setLogged] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('currentUser')?.length) {
            setLogged(true)
        } else {
            setLogged(false)
        }
    }, [children])

    return (
        <MainLayout>
            <PageBody>
                {logged ? <UserNav /> : null}
                <Header logged={logged} />
                <OfferSlider />
                <MainContent>
                    {children}
                </MainContent>
            </PageBody>
        </MainLayout>
    )
}

export default AppLayout