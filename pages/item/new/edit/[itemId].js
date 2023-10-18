import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleItem } from '../../../../API/Promises';
import ItemForm from '../../../../components/ItemForm';

export default function EditItemPage() {
  const [item, setItem] = useState({});
  const router = useRouter();
  const { itemId } = router.query;
  const getThisItem = () => {
    getSingleItem(itemId)?.then((data) => {
      setItem(data);
    });
  };

  useEffect(() => {
    getThisItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemId]);

  return (
    <>
      <div>
        <ItemForm itemObj={item} />
      </div>
    </>
  );
}
