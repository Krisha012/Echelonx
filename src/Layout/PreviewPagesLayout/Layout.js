import React from 'react'
//------------ Import React router dom ------------ 
import { Outlet } from "react-router-dom";
//------------ Import Screenshot component ------------ 
import Screenshot from '../../components/PreviewScreenshot';
//------------ Import Contact component ------------ 
import Contact from '../../components/PreviewContact';
//------------ Import Navbar component ------------ 
import Navbar from '../../components/PreviewNavbar/index';
//------------ Import Footer component ------------ 
import Footer from '../../components/PreviewFooter';

const PreviewPagesLayout = () => {
    return (
        <React.Fragment>

            <Navbar />

            <Outlet />

            <Screenshot />

            <Contact />

            <Footer />

        </React.Fragment>
    )
}

export default PreviewPagesLayout
