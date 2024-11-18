import { useState, useEffect } from 'react';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/homepage';
import Header from './components/header'; // Import the Header component
import Footer from './components/footer'; // Import the Footer component
import AfcommLogo from './assets/AfcommLogo.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Installations from './pages/i';
import SupportMaintenances from './pages/sm';
import SupplyProcurements from './pages/sp';
import Products from './pages/product';
import Contact from './pages/contact';


function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsAppReady(true);
    }, 2000); // adjust the timeout to your needs
    
    return () => clearTimeout(timeoutId);
  }, []);
  
  useEffect(() => {
    if (isAppReady) {
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 1000); // adjust the timeout to your needs
      return () => clearTimeout(timeoutId);
    }
  }, [isAppReady]);
  
  if (!isAppReady) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={AfcommLogo} className='animate-pulse' width={200} height={200}/>
      </div>
    );
  }

  return (
    <BrowserRouter>
    <div className='relative h-full'>
          <Header/>
            <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route index path="/installations" element={<Installations />} />
            <Route index path="/support&maintenances" element={<SupportMaintenances />} />
            <Route index path="/supply&procurements" element={<SupplyProcurements />} />
            <Route index path="/products" element={<Products />} />
            <Route index path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          {/* <div className='inset-x-0 bottom-0'> */}
          <Footer/>
        {/* </div> */}
    </div>
    </BrowserRouter>
  );
}

export default App;