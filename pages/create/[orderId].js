import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { getSingleOrder } from '../../API/Promises';
import OrderForm from '../../components/OrderForm';
import { checkUser } from '../../utils/auth';

export default function EditOrderPage() {
  const [order, setOrder] = useState({});
  const [userId, setUserId] = useState(0);
  const { user } = useAuth();
  const router = useRouter();
  const { orderId } = router.query;
  const getThisOrder = () => {
    getSingleOrder(orderId)?.then((data) => {
      setOrder(data);
    });
  };
  const getUserId = () => {
    checkUser(user.uid)?.then((data) => {
      setUserId(data);
    });
  };

  useEffect(() => {
    getUserId();
  }, [user]);

  useEffect(() => {
    getThisOrder();
  }, [orderId]);

  return (
    <>
      <OrderForm obj={order[0]} userID={userId} />
    </>
  );
}
