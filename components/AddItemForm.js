import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { postItemToOrder } from '../API/Promises';

const initialState = {
  item: 0,
};

export default function AddItem({ itemArr, orderID }) {
  const [formInput, setFormInput] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postItemToOrder(orderID, formInput.item).then();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" label="Item" className="mb-3">
          <Form.Select
            className="form-input"
            type="text"
            name="item"
            value={formInput.item}
            onChange={handleChange}
            required
          >
            {itemArr.map((obj) => (
              <option
                key={obj.name}
                value={obj.id}
              >
                {obj.name}
              </option>
            ))}
          </Form.Select>
        </FloatingLabel>
        <Button type="submit">Add</Button>
      </Form>
    </>
  );
}

AddItem.propTypes = {
  itemArr: PropTypes.arrayOf(shape).isRequired,
  orderID: PropTypes.number.isRequired,
};
