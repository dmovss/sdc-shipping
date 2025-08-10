import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Services from './sections/Services/Services';
import ShippingProcess from './sections/ShippingProcess/ShippingProcess';
import Partners from './sections/Partners/Partners';
import Contact from './sections/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <ShippingProcess />
            <Partners />
          </>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;