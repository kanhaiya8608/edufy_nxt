// pages/api/items.js
import { v4 as uuidv4 } from 'uuid';
import pool from '../../../db.js';

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const [rows] = await pool.execute('SELECT * FROM items');
      res.status(200).json(rows);
    } else if (req.method === 'POST') {
      const { name, address, city, state, contact, image, email_id } = req.body;

      if (!name || !address || !city || !state || !contact || !image || !email_id) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const itemId = uuidv4(); 

      const [result] = await pool.execute(
        'INSERT INTO items (id, name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [itemId, name, address, city, state, contact, image, email_id]
      );

      if (!result || result.affectedRows !== 1) {
        return res.status(500).json({ error: 'Failed to insert data into the database' });
      }

      const [rows] = await pool.execute('SELECT * FROM items WHERE id = ?', [itemId]);
      res.status(201).json(rows[0]);
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
