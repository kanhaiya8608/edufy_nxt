// pages/api/upload.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: path.join(process.cwd(), 'public/schoolImages'),
  filename: (req, file, cb) => {
    const filename = `file_${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default function handler(req, res) {
  try {
    if (req.method === 'POST') {
      upload.single('file')(req, res, function (err) {
        if (err instanceof multer.MulterError) {
          return res.status(500).json({ error: 'File upload error', details: err.message });
        } else if (err) {
          return res.status(500).json({ error: 'Unknown error during file upload', details: err.message });
        }

        const filename = req.file.filename;
        return res.status(200).json({ success: true, message: 'File uploaded successfully', filename: filename });
      });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
