const dbUrl = 'https://localhost:7165';

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getAllOpenOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ordersopen`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getAllClosedOrders = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/ordersclosed`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getOrdersItems = (orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order/${orderId}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const getUserId = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/checkuserID/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const deleteOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteOrderItem = (orderId, itemId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order/${orderId}/item/${itemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const postOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const putOrder = (payload, orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/order/${orderId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const postItemToOrder = (orderId, itemId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/orderitem/${orderId}/${itemId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
    .then((response) => {
      if (response.status === 204) {
        resolve();
      } else {
        response.json()
          .then((data) => reject(data))
          .catch((error) => reject(error));
      }
    })
    .catch(reject);
});

const getAllItems = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const postItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const putItem = (payload, itemId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/item/${itemId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleItem = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/item/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const postItemToOrderV2 = (payload, orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/additem${orderId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const closeOrder = (payload, orderId) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/closeorder/${orderId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => {
      resolve(data);
    })
    .catch(reject);
});

const getClosedOrdersSummary = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/closedordersummary`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getAllOrders,
  getAllOpenOrders,
  getAllClosedOrders,
  getSingleOrder,
  getOrdersItems,
  getUserId,
  deleteOrder,
  deleteOrderItem,
  postOrder,
  putOrder,
  postItemToOrder,
  getAllItems,
  postItem,
  putItem,
  getSingleItem,
  postItemToOrderV2,
  closeOrder,
  getClosedOrdersSummary,
};
