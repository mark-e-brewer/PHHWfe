import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getAllItems } from '../../API/Promises';
import AddItem from '../../components/AddItemForm';

export default function AddItemPage() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { orderId } = router.query;
  const getAllTheItems = () => {
    getAllItems()?.then((data) => {
      setItems(data);
    });
  };

  useEffect(() => {
    getAllTheItems();
  }, []);

  return (
    <>
      <div>
        <AddItem itemArr={items} orderID={orderId} />
      </div>
    </>
  );
}
