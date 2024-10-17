import React, { useState, useEffect } from 'react';
import './PropertyList.css';

function PropertyList({ user }) {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/properties")
      .then(response => response.json())
      .then(data => setProperties(data));
  }, []);

  const handleBook = (propertyId) => {
    if (user?.role === "buyer") {
      fetch("http://localhost:3001/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ propertyId, buyerId: user.id })
      })
        .then(response => response.json())
        .then(() => alert("Booking request sent!"));
    }
  };

  return (
    <div className="property-list">
      {properties.map(property => (
        <div key={property.id} className="property-card">
          <img src={property.image} alt={property.title} />
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>${property.price}</p>
          {user?.role === "buyer" && (
            <button onClick={() => handleBook(property.id)}>Book Viewing</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
