import React from 'react';
import PropTypes from 'prop-types';

export default function ClosedOrderCard({ summary }) {
  if (summary) {
    return (
      <>
        <div className="closed-order-card text-center">
          <div>
            <h3>{`Order ${summary.orderId}`}</h3>
          </div>
          <div>
            <h5>{`Total Order Amount (including tip): $${summary.tip + summary.items.reduce((total, item) => total + item.price, 0)}`}</h5>
            <h5>{`Date of the order closure: ${new Date(summary.dateClosed).toLocaleString()}`}</h5>
            <h5>{`Payment Type: ${summary.paymentType}`}</h5>
            <h5>{`Tip Amount: $${summary.tip}`}</h5>
            <h5>{`Order Type: ${summary.orderType}`}</h5>
          </div>
        </div>
      </>
    );
  }

  return <div>Error: Summary data not found for this order.</div>;
}

ClosedOrderCard.propTypes = {
  summary: PropTypes.shape({
    orderId: PropTypes.number,
    tip: PropTypes.number,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
      }),
    ),
    dateClosed: PropTypes.string,
    paymentType: PropTypes.string,
    orderType: PropTypes.string,
  }).isRequired,
};
