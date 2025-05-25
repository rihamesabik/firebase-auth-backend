import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    try {
      const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Uploader un fichier</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <button type="submit">Envoyer</button>
      </form>

      {result && (
        <div>
          <h3>Upload Réussi</h3>
          <a href={result.url} target="_blank" rel="noreferrer">Voir Média</a>
        </div>
      )}
    </div>
  );
};

export default UploadForm;
