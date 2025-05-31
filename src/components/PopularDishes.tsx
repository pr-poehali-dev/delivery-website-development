import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const dishes = [
  {
    id: 1,
    name: "Маргарита",
    description: "Классическая пицца с томатами и моцареллой",
    price: 590,
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.8,
    cookTime: "25-30 мин",
  },
  {
    id: 2,
    name: "Бургер Делюкс",
    description: "Сочная говядина, сыр чеддер, салат и томаты",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.9,
    cookTime: "15-20 мин",
  },
  {
    id: 3,
    name: "Паста Карбонара",
    description: "Спагетти с беконом в сливочном соусе",
    price: 420,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.7,
    cookTime: "20-25 мин",
  },
  {
    id: 4,
    name: "Салат Цезарь",
    description: "Свежие листья салата с курицей и пармезаном",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.6,
    cookTime: "10-15 мин",
  },
];

const PopularDishes = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 font-montserrat mb-4">
            Популярные блюда
          </h2>
          <p className="text-xl text-gray-600 font-open-sans">
            Самые заказываемые блюда этой недели
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish) => (
            <Card
              key={dish.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 text-sm font-medium flex items-center space-x-1">
                  <Icon
                    name="Star"
                    size={12}
                    className="text-yellow-400 fill-current"
                  />
                  <span>{dish.rating}</span>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-montserrat">
                  {dish.name}
                </CardTitle>
                <CardDescription className="font-open-sans">
                  {dish.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-orange-500 font-montserrat">
                    {dish.price} ₽
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Clock" size={14} />
                    <span className="ml-1">{dish.cookTime}</span>
                  </div>
                </div>

                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Icon name="Plus" size={16} />В корзину
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
