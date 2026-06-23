import { groupByCost } from "../../../utils/groupByCost";
import PriceGroup from "../PriceGroup/PriceGroup";

const OrderDisplay = ({orderData}) => {


const groupedOrders = groupByCost(orderData);

  return (
    <div>
        <h1>Products to Order</h1>
        <PriceGroup groupedOrders={groupedOrders} />
    </div>
  )
}

export default OrderDisplay