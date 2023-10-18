import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteOrderItem } from '../API/Promises';

export default function ItemCard({ itemObj, onUpdate, orderId }) {
  const router = useRouter();
  const deleteThisItem = () => {
    if (window.confirm('Delete Item?')) {
      deleteOrderItem(orderId, itemObj?.id).then(() => onUpdate());
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center m-2">
        <button type="button" style={{ marginRight: '20px' }} onClick={() => router.push(`/item/new/edit/${itemObj.id}`)}>Edit</button>
        <h4>{itemObj.name}:</h4>
        <h4> ${itemObj.price}.00</h4>
        <button type="button" style={{ marginLeft: '20px' }} onClick={deleteThisItem}>Delete</button>
      </div>
    </>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  orderId: PropTypes.number.isRequired,
};
