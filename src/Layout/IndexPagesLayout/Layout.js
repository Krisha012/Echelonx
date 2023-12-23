import React from 'react'
//------------ Import React router dom ------------ 
import { Outlet } from "react-router-dom";
//------------ Import Navbar component ------------ 
import Navbar from '../../components/Header/index'
//------------ Import Services component ------------ 
import Services from '../../components/Services/index'
//------------ Import Cta component ------------ 
import Cta from '../../components/Cta/index'
//------------ Import Feature component ------------ 
import Feature from '../../components/Features/index'
//------------ Import Price component ------------ 
import Price from '../../components/Price/index'
//------------ Import Client component ------------ 
import Client from '../../components/Clients/index'
//------------ Import Team component ------------ 
import Team from '../../components/Team/index'
//------------ Import Counter component ------------ 
import Counter from '../../components/Counter/index'
//------------ Import Faq component ------------ 
import Faq from '../../components/Faq/index'
//------------ Import Contact component ------------ 
import Contact from '../../components/Contact/index'
//------------ Import Footer component ------------ 
import Footer from '../../components/Footer/index'

const Layout = () => {
    return (
        <React.Fragment>

            <Navbar />

            <Outlet />

            <Services />

            <Cta />

            <Feature />

            <Price />

            <Client />

            <Team />

            <Counter />

            <Faq />

            <Contact />

            <Footer />

        </React.Fragment>
    )
}

export default Layout
