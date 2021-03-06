import formatMoney from './formatMoney';
import calculatePizzaPrice from './calculatePizzaPrice';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const singlePizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: singlePizza.name,
      thumbnail: singlePizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(singlePizza.price, item.size)),
    };
  });
}
