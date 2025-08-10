const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">SDC International Shipping</h3>
            <p>Международные перевозки с полным сопровождением</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <p>Email: info@sdc-shipping.com</p>
            <p>Телефон: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} SDC International Shipping. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;