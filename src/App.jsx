import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './sections/Services';
import ShippingProcess from './sections/ShippingProcess';
import Partners from './sections/Partners';
import Contact from './sections/Contact';

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