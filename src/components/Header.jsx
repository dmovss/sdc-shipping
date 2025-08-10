import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-2xl font-bold text-primary">
          SDC International Shipping
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/services" className="hover:text-accent">Услуги</Link></li>
            <li><Link to="/process" className="hover:text-accent">Процесс</Link></li>
            <li><Link to="/partners" className="hover:text-accent">Партнеры</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}