import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "Search",
    title: "Выберите блюдо",
    description: "Найдите нужное блюдо из каталога любимых ресторанов",
  },
  {
    icon: "ShoppingCart",
    title: "Оформите заказ",
    description: "Добавьте блюда в корзину и укажите адрес доставки",
  },
  {
    icon: "CreditCard",
    title: "Оплатите",
    description: "Выберите удобный способ оплаты: картой или наличными",
  },
  {
    icon: "Truck",
    title: "Получите заказ",
    description: "Курьер доставит горячие блюда прямо к вашей двери",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Простой процесс заказа в 4 шага
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon
                    name={step.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center text-orange-500 font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-montserrat">
                {step.title}
              </h3>
              <p className="text-gray-600 font-open-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
