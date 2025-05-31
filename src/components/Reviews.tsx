import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    rating: 5,
    text: "Заказываю уже месяц - всегда вовремя и очень вкусно! Особенно нравится пицца Маргарита.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Михаил Смирнов",
    rating: 5,
    text: "Быстрая доставка, горячая еда. Курьеры всегда вежливые. Рекомендую!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Елена Козлова",
    rating: 5,
    text: "Отличное приложение, удобно заказывать. Большой выбор ресторанов и блюд.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Отзывы клиентов
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Что говорят о нас наши клиенты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 font-montserrat">
                      {review.name}
                    </h4>
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 font-open-sans italic">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-orange-500">4.9</span>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span>из 1,247 отзывов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
