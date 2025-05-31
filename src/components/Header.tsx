import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Utensils" size={28} className="text-orange-500" />
            <span className="text-2xl font-bold text-gray-900 font-montserrat">
              БыстроЕда
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Меню
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Icon name="MapPin" size={16} />
              Москва
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="ShoppingCart" size={16} />
              Корзина
            </Button>
            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
