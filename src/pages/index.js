import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Head from 'next/head';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items');
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  return (
    <div className="container mx-auto px-8 m-8">
       <Head>
        <title>Schools</title> 
      </Head>
      <nav className="mb-4">
        <Link href="/addSchool" className="text-blue-500 hover:underline">
          Go to Admin
        </Link>
      </nav>

      <h1 className="text-4xl font-bold mb-4">Home Page</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="border p-4 rounded-md shadow-md flex flex-col items-center">
            <div>
              {item.image && (
                <img
                  className="h-30"
                  src={`/schoolImages/${item.image}`}
                  alt={`Photo for ${item.name}`}
                />
              )}
              <div className="mb-2">
                <h1 className="text-3xl py-2 font-semibold">{item.name}</h1>
              </div>
              <p className="text-gray-600 text-left">{item.address}, {item.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
