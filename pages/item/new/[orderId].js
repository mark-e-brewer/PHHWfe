import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../../utils/context/authContext';
import { checkUser } from '../../../utils/auth';
import ItemForm from '../../../components/ItemForm';

export default function CreateItemPage() {
  const [userId, setUserId] = useState(0);
  const { user } = useAuth();
  const router = useRouter();
  const { orderId } = router.query;
  const getUserId = () => {
    checkUser(user.uid)?.then((data) => {
      setUserId(data);
    });
  };
  console.log(userId);
  useEffect(() => {
    getUserId();
  }, [user]);

  return (
    <>
      <ItemForm orderID={orderId} />
    </>
  );
}
