import Order from "../Order/Order";
import { PRICE_RANGES } from "../../../utils/constants";

const PriceGroup = ({ groupedOrders }) => {
  const priceGroups = [
    PRICE_RANGES.HIGH,
    PRICE_RANGES.MEDIUM,
    PRICE_RANGES.LOW
  ];

  return (
    <>
      {priceGroups.map((priceRange) => (
        <section key={priceRange}>
          <h2>{priceRange}</h2>

          {(groupedOrders[priceRange] || []).map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </section>
      ))}
    </>
  );
};

export default PriceGroup;