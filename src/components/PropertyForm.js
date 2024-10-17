import React, { useState } from 'react';
import './PropertyForm.css';

function PropertyForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('image', image);

    fetch('http://localhost:3001/properties', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then(() => alert('Property added successfully!'));
  };

  return (
    <div className="property-form-container">
      <form onSubmit={handleSubmit} className="property-form">
        <h2>Add Property</h2>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default PropertyForm;
