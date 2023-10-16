import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getOrdersItems, getSingleOrder } from '../../API/Promises';
import ItemCard from '../../components/Items';

export default function OrderDetailsPage() {
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { orderId } = router.query;
  const getThisOrder = () => {
    getSingleOrder(orderId).then(setOrder);
  };

  const getThisOrdersItems = () => {
    if (order && order.length > 0) {
      getOrdersItems(order[0].id).then((data) => {
        setItems(data);
      });
    }
  };

  useEffect(() => {
    getThisOrder();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId]);

  useEffect(() => {
    getThisOrdersItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [order]);

  let status = true;
  if (order[0]?.status === true) {
    status = <h4>Status: Closed</h4>;
  } else if (order[0]?.status === false) {
    status = <h4>Status: Open</h4>;
  }
  return (
    <>
      <div className="d-flex flex-column text-center">
        <h1>{order[0]?.name}</h1>
        {status}
        <h4>Customer Phone: {order[0]?.customerPhone}</h4>
        <h4>Customer Email: {order[0]?.customerEmail}</h4>
        <h4>Type: {order[0]?.type}</h4>
      </div>
      <div>
        <h1 className="text-center mt-4">Items</h1>
        <hr />
        <div>
          {items.map((obj) => <ItemCard itemObj={obj} onUpdate={getThisOrdersItems} orderId={orderId} />)}
        </div>
      </div>
    </>
  );
}
