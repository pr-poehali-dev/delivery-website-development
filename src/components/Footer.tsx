import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Utensils" size={28} className="text-orange-500" />
              <span className="text-2xl font-bold font-montserrat">
                БыстроЕда
              </span>
            </div>
            <p className="text-gray-400 font-open-sans">
              Быстрая доставка вкусной еды из лучших ресторанов города
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} className="text-orange-500" />
              <span>8 (800) 555-35-35</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Компания
            </h3>
            <ul className="space-y-2 text-gray-400 font-open-sans">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вакансии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Партнерам
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Блог
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Помощь
            </h3>
            <ul className="space-y-2 text-gray-400 font-open-sans">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Как заказать
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Оплата
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 font-montserrat">
              Следите за нами
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-open-sans">
          <p>&copy; 2024 БыстроЕда. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
