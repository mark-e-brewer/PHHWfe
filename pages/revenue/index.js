import { useEffect, useState } from 'react';
import { getClosedOrdersSummary } from '../../API/Promises';
import ClosedOrderCard from '../../components/ClosedOrderCard';

export default function RevenuePage() {
  const [closedOrdersSum, setClosedOrdersSum] = useState([]);

  const getClosedOrdersAndItems = () => {
    getClosedOrdersSummary().then((data) => {
      setClosedOrdersSum(data);
    });
  };

  useEffect(() => {
    getClosedOrdersAndItems();
  }, []);

  // Calculate totalTip and totalItemPrices as you already have done.
  const totalTip = closedOrdersSum.reduce((total, order) => total + order.tip, 0);
  const totalItemPrices = closedOrdersSum.reduce((total, order) => total + order.items.reduce((orderTotal, item) => orderTotal + item.price, 0), 0);

  // Calculate total revenue.
  const totalRevenue = totalTip + totalItemPrices;

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Total Revenue: ${totalRevenue}</h1>
      </div>
      <div>
        {closedOrdersSum.map((summary) => (
          <ClosedOrderCard key={summary.orderId} summary={summary} />
        ))}
      </div>
    </>
  );
}
