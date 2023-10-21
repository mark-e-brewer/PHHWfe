import { useRouter } from 'next/router';
import CloseOrderForm from '../../components/CloseOrderForm';

export default function CloseOrderPage() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <>
      <CloseOrderForm orderID={orderId} />
    </>
  );
}
