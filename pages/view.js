import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllOpenOrders } from '../API/Promises';
import OrderCard from '../components/OrderCard';

export default function ViewOrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const getAllTheOpenOrders = () => {
    getAllOpenOrders().then(setOrders);
  };
  console.warn(user);
  useEffect(() => {
    getAllTheOpenOrders()?.then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <>
      <h1 className="text-center">Open Orders</h1>
      <hr />
      <div className="d-flex flex-column justify-content-center align-items-center">
        {orders.map((obj) => <OrderCard orderObj={obj} onUpdate={getAllTheOpenOrders} />)}
      </div>
    </>
  );
}
