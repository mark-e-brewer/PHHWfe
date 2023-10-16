import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { postOrder, putOrder } from '../API/Promises';

const initialState = {
  name: '',
  status: false,
  type: '',
  customerName: '',
  customerPhone: '',
  customerEmail: '',
};
export default function OrderForm({ obj, userID }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (obj.id) {
      setFormInput(obj);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.id) {
      putOrder(formInput, obj.id).then(() => {
        router.push('/view');
      });
    } else {
      const payload = { ...formInput, userId: userID };
      postOrder(payload).then(() => {
        router.push('/view');
      });
    }
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel controlId="floatingInput1" label="Order Name" className="mb-3">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Order Name"
              name="name"
              value={formInput.name}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Order Type" className="mb-3">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Type Name"
              name="type"
              value={formInput.type}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Customer Phone" className="mb-3">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Customer Phone"
              name="customerPhone"
              value={formInput.customerPhone}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Customer Email" className="mb-3">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Customer Email"
              name="customerEmail"
              value={formInput.customerEmail}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput1" label="Customer Name" className="mb-3">
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Customer Name"
              name="customerName"
              value={formInput.customerName}
              onChange={handleChange}
              required
            />
          </FloatingLabel>
          <Button type="submit" className="form-submit">Submit</Button>
        </Form>
      </div>
    </>
  );
}

OrderForm.propTypes = {
  obj: PropTypes.shape({
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
  }),
  userID: PropTypes.number,
};

OrderForm.defaultProps = {
  obj: initialState,
  userID: 0,
};
