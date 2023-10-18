import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { postItem, putItem } from '../API/Promises';

const initialState = {
  name: '',
  price: 0,
};

export default function ItemForm({ itemObj, orderID }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  useEffect(() => {
    if (itemObj.id) {
      setFormInput(itemObj);
    }
  }, [itemObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formInput.id) {
      putItem(formInput, itemObj.id).then(() => {
        router.push('/view');
      });
    } else {
      postItem(formInput).then(() => {
        router.push(`/item/${orderID}`);
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput1" label="Item Name" className="mb-3">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter Item Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput1" label="Item Price" className="mb-3">
          <Form.Control
            className="form-input"
            type="text"
            placeholder="Enter Item Price"
            name="price"
            value={formInput.price}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

ItemForm.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  orderID: PropTypes.number,
};

ItemForm.defaultProps = {
  itemObj: initialState,
  orderID: 0,
};
