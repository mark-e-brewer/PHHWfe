import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getAllOrders } from '../API/Promises';
import OrderCard from '../components/OrderCard';

export default function ViewOrdersPage() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const getAllTheOrders = () => {
    getAllOrders().then(setOrders);
  };
  console.warn(user);
  useEffect(() => {
    getAllTheOrders()?.then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {orders.map((obj) => <OrderCard orderObj={obj} onUpdate={getAllTheOrders} />)}
      </div>
    </>
  );
}
