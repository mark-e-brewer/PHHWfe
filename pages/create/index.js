import { useEffect, useState } from 'react';
import OrderForm from '../../components/OrderForm';
import { getUserId } from '../../API/Promises';
import { useAuth } from '../../utils/context/authContext';

export default function NewOrderPage() {
  const [userId, setUserId] = useState(0);
  const { user } = useAuth();
  const getThisUsersId = () => {
    getUserId(user.uid).then(setUserId);
  };

  useEffect(() => {
    getThisUsersId();
  }, []);

  return (
    <OrderForm userID={userId[0]?.id} />
  );
}
