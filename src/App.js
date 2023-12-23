import React, { useEffect } from 'react'
//------------ Import React router dom ------------ 
import { BrowserRouter, Routes, Route } from "react-router-dom";
//------------ Import Index Layout ------------ 
import IndexLayout from './Layout/IndexPagesLayout/Layout';
//------------ Import Preview Layout ------------ 
import PreviewLayout from './Layout/PreviewPagesLayout/Layout'
//------------ Import Preview page ------------ 
import PreviewScreen from './pages/PreviewPages/Preview-Screen'
//------------ Import Index1 page ------------ 
import Index1 from './pages/IndexPages/Index1'
//------------ Import Index2 page ------------ 
import Index2 from './pages/IndexPages/Index2'
//------------ Import Index3 page ------------ 
import Index3 from './pages/IndexPages/Index3'
//------------ Import Index4 page ------------ 
import Index4 from './pages/IndexPages/Index4'
//------------ Import Index5 page ------------ 
import Index5 from './pages/IndexPages/Index5'
//------------ Import Index6 page ------------ 
import Index6 from './pages/IndexPages/Index6'
//------------ Import Index7 page ------------ 
import Index7 from './pages/IndexPages/Index7'
//------------ Import Index8 page ------------ 
import Index8 from './pages/IndexPages/Index8'
//------------ Import Index9 page ------------ 
import Index9 from './pages/IndexPages/Index9'
//------------ Import Index10 page ------------ 
import Index10 from './pages/IndexPages/Index10'
//------------ Import Index11 page ------------ 
import Index11 from './pages/IndexPages/Index11'
//------------ Import Index12 page ------------ 
import Index12 from './pages/IndexPages/Index12'
//------------ Import AOS Packag ------------ 
import AOS from 'aos';

const App = () => {
  // AOS Animation function 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {/*------ Start Preview Layout warp --------*/}
        <Route path="/" element={<PreviewLayout />}>
          <Route index element={<PreviewScreen />} />
        </Route>
        {/*------ End Preview Layout warp --------*/}

        {/*------ Start Index Layout warp --------*/}
        <Route path="/" element={<IndexLayout />}>
          <Route path="/Index1" element={<Index1 />} />
          <Route path="/Index2" element={<Index2 />} />
          <Route path="/Index3" element={<Index3 />} />
          <Route path="/Index4" element={<Index4 />} />
          <Route path="/Index5" element={<Index5 />} />
          <Route path="/Index6" element={<Index6 />} />
          <Route path="/Index7" element={<Index7 />} />
          <Route path="/Index8" element={<Index8 />} />
          <Route path="/Index9" element={<Index9 />} />
          <Route path="/Index10" element={<Index10 />} />
          <Route path="/Index11" element={<Index11 />} />
          <Route path="/Index12" element={<Index12 />} />
        </Route>
        {/*------ Start Index Layout warp --------*/}
      </Routes>
    </BrowserRouter>
  )
}

export default App
