// pages/api/[id]/index.js
import pool from '../../../../../db.js';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const [rows] = await pool.execute('SELECT * FROM items WHERE id = ?', [id]);

      if (rows.length === 0) {
        return res.status(404).json({ error: 'Item not found' });
      }

      res.status(200).json(rows[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else if (req.method === 'DELETE') {
    try {
      const [result] = await pool.execute('DELETE FROM items WHERE id = ?', [id]);

      if (!result || result.affectedRows !== 1) {
        return res.status(404).json({ error: 'Item not found or failed to delete' });
      }

      res.status(204).end(); // 204 No Content indicates successful deletion
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
