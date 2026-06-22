import { groupByCost } from "../../../utils/groupByCost";

const OrderDisplay = ({orderData}) => {

    console.log(orderData);

    const groupedOrders = groupByCost(orderData);

    console.log(groupedOrders);
  return (
    <div>OrderDisplay</div>
  )
}

export default OrderDisplay