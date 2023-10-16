import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteOrder } from '../API/Promises';

export default function OrderCard({ orderObj, onUpdate }) {
  const router = useRouter();
  const deleteThisOrder = () => {
    deleteOrder(orderObj.id).then(() => onUpdate());
  };

  const handleOrderClick = () => {
    router.push(`/details/${orderObj.id}`);
  };

  return (
    <>
      <div className="order-card-cont text-center">
        <div>
          <h2>{orderObj.name}</h2>
        </div>
        <div className="d-flex justify-content-between">
          <button type="button">Edit</button>
          <button type="button" onClick={handleOrderClick}>Details</button>
          <button type="button" onClick={() => router.push(`/item/${orderObj.id}`)}>Add Item</button>
          <button type="button" onClick={deleteThisOrder}>Delete</button>
        </div>
      </div>
    </>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    userId: PropTypes.number,
    itemId: PropTypes.number,
    status: PropTypes.bool,
    type: PropTypes.string,
    customerName: PropTypes.string,
    customerPhone: PropTypes.number,
    cutomerEmail: PropTypes.string,
    paymentType: PropTypes.string,
    tip: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
