import { useState } from 'react';

const PhotoUpload = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error('No file selected for upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        onUpload(data.filename);
        setSelectedFile(null);
      })
      .catch((error) => console.error('Error uploading photo:', error));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload Photo
      </button>
    </div>
  );
};

export default PhotoUpload;
