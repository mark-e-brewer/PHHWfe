import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { checkUser } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const router = useRouter();
  const [currUser, setCurrUser] = useState(null);
  const { user } = useAuth();
  useEffect(() => {
    checkUser(user.uid).then((data) => {
      setCurrUser(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.warn(currUser);
  return (
    <>
      <h1 className="text-center">Pizza Hip-Hop & Wings</h1>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '80vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <button type="button" className="view-order-btn mb-2" onClick={() => router.push('/view')}>View Orders</button>
        <button type="button" className="create-order-btn mb-2" onClick={() => router.push('/create')}>Create Orders</button>
        <button type="button" className="view-revenue-btn" onClick={() => router.push('/revenue')}>View Revenue</button>
      </div>
    </>
  );
}

export default Home;
