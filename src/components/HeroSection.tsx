import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-montserrat leading-tight">
                Доставка еды в
                <span className="text-orange-500"> Саракташе</span>
              </h1>
              <p className="text-xl text-gray-600 font-open-sans">
                Заказывайте любимые блюда из ресторанов Саракташа. Доставим
                быстро в любой район города.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <div className="relative flex-1">
                <Icon
                  name="MapPin"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                />
                <Select>
                  <SelectTrigger className="pl-10 h-12 text-base">
                    <SelectValue placeholder="Выберите адрес доставки" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center">Центр города</SelectItem>
                    <SelectItem value="jubilein">
                      Юбилейный микрорайон
                    </SelectItem>
                    <SelectItem value="zavod">Заводской район</SelectItem>
                    <SelectItem value="lenin">ул. Ленина</SelectItem>
                    <SelectItem value="gagarin">ул. Гагарина</SelectItem>
                    <SelectItem value="pushkin">ул. Пушкина</SelectItem>
                    <SelectItem value="sovetskaya">ул. Советская</SelectItem>
                    <SelectItem value="schoolnaya">ул. Школьная</SelectItem>
                    <SelectItem value="molodezh">ул. Молодежная</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 h-12 px-6"
              >
                <Icon name="MapPin" size={20} />
                Заказать
              </Button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-orange-500" />
                <span>Доставка 20-40 мин</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-500" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Вкусная пицца"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  1,247 заказов сегодня
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
