import React, { useState } from 'react';
import PropTypes, { shape } from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { postItemToOrder } from '../API/Promises';

const initialState = {
  item: 0,
};

export default function AddItem({ itemArr, orderID }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postItemToOrder(orderID, formInput.item, {}).then(() => {
      router.push(`/details/${orderID}`);
    });
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
            <option value="" key="">Select an Item</option>
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
        <div className="d-flex justify-content-between">
          <Button type="submit">Add</Button>
          <Button type="button" onClick={() => router.push(`/item/new/${orderID}`)}>Create New Item</Button>
        </div>
      </Form>
    </>
  );
}

AddItem.propTypes = {
  itemArr: PropTypes.arrayOf(shape).isRequired,
  orderID: PropTypes.number.isRequired,
};
