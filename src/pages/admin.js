// pages/admin.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoUpload from '../components/PhotoUpload';
const Admin = () => {
  const [newItem, setNewItem] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    contact: '',
    image: '',
    email_id: ''
  });

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

  const handleAddItem = async () => {
    try {
      const response = await axios.post('/api/items', newItem);
      setNewItem({
        name: '',
        address: '',
        city: '',
        state: '',
        contact: '',
        image: '',
        email_id: ''
      });
      await fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDeleteItem = async (itemId, imageName) => {
    try {
      if (imageName) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
  
        const raw = JSON.stringify({
          "imageName": imageName
        });
  
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
        };
  
        await fetch("http://localhost:3000/api/deleteImage", requestOptions);
      }
  
      await axios.delete(`/api/items/${itemId}`);
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  

  return (
    <div className="container mx-auto px-8 m-8">
      <h1 className="text-3xl font-bold mb-4">Admin Page</h1>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Name:
          <input
            className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Address:
          <input
            className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={newItem.address}
            onChange={(e) => setNewItem({ ...newItem, address: e.target.value })}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          City:
          <input
            className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={newItem.city}
            onChange={(e) => setNewItem({ ...newItem, city: e.target.value })}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          State:
          <input
            className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={newItem.state}
            onChange={(e) => setNewItem({ ...newItem, state: e.target.value })}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Contact:
          <input
            className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={newItem.contact}
            onChange={(e) => setNewItem({ ...newItem, contact: e.target.value })}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Image:
          <PhotoUpload onUpload={(filename) => setNewItem({ ...newItem, image: filename })} />
        </label>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Email:
          <input
            className="w-full border border-gray-300 p-2 mt-1 rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={newItem.email_id}
            onChange={(e) => setNewItem({ ...newItem, email_id: e.target.value })}
          />
        </label>
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        onClick={handleAddItem}
      >
        Add Item
      </button>


<h2 className="text-xl font-semibold mt-8 mb-4">Existing Items</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {items.map((item) => (
    <div key={item.id} className="flex flex-col justify-center border p-4">
      <strong className="block text-lg font-semibold mb-2">{item.name}</strong>
      <div className='flex items-center'>
        {item.image && (
          <img
            className="w-full h-60 object-cover mb-2"
            src={`/schoolImages/${item.image}`}
            alt={`Photo for ${item.name}`}
          />
        )}
      </div>
      <p className="text-gray-600">
        <span className='text-black font-bold'>Address:</span> {item.address}, {item.city}, {item.state}
      </p>
      <p className="text-gray-600">
        <span className='text-black font-bold'>Contact:</span> {item.contact}
      </p>
      <p className="text-gray-600">
        <span className='text-black font-bold'>Email:</span> {item.email_id}
      </p>
      <button
        className="mt-auto  bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red active:bg-red-800"
        onClick={() => handleDeleteItem(item.id, item.image)}
      >
        Delete
      </button>
    </div>
  ))}
</div>
  </div>
  );
};

export default Admin;
