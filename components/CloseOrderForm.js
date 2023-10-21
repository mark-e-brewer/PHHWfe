import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { closeOrder } from '../API/Promises';

const initialState = {
  tip: 0,
  paymentType: '',
};

export default function CloseOrderForm({ orderID }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tipValue = parseFloat(formInput.tip);
    if (Number.isNaN(tipValue)) {
      formInput.tip = 0;
    }
    const payload = { ...formInput };
    closeOrder(payload, orderID).then(() => {
      router.push('/view');
    });
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput1" label="Payment Type" className="mb-3">
            <Form.Select
              className="form-input"
              type="text"
              name="paymentType"
              value={formInput.paymentType}
              onChange={handleChange}
              required
            >
              <option value="" key="">Select Payment type</option>
              <option value="Cash" key="Cash">Cash</option>
              <option value="Check" key="Check">Check</option>
              <option value="Debit" key="Debit">Debit</option>
              <option value="Credit" key="Credit">Credit</option>
              <option value="Mobile-Payment" key="Mobile-Payment">Mobile-Payment</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Tip" className="mb-3">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Tip (Optional)"
              name="tip"
              value={formInput.tip}
              onChange={handleChange}
            />
          </FloatingLabel>
          <Button type="submit">Close</Button>
        </Form>
      </div>
    </>
  );
}

CloseOrderForm.propTypes = {
  orderID: PropTypes.number.isRequired,
};
