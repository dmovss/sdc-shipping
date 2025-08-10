import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './sections/Services';
import Contact from './sections/Contact';

const ShippingProcess = () => <section className="py-16"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-center">Процесс перевозки</h2></div></section>;
const Partners = () => <section className="py-16 bg-gray-50"><div className="container mx-auto px-4"><h2 className="text-3xl font-bold text-center">Наши партнеры</h2></div></section>;

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