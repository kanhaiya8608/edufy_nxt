import fs from 'fs/promises';
import path from 'path';

export default async function handler(req, res) {
  const { imageName } = req.body;

  try {
    if (!imageName) {
      return res.status(400).json({ error: 'Image name is required' });
    }

    const imagePath = path.join(process.cwd(), 'public', 'uploads', imageName);

    // Use fs.promises.unlink to make it asynchronous
    await fs.unlink(imagePath);

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error.code === 'ENOENT') {
      res.status(404).json({ error: 'Image not found' });
    } else {
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  }
}
