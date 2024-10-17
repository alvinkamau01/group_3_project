import React from 'react';

const PropertyDetails = ({ property }) => {
  return (
    <div>
      <h2>{property.title}</h2>
      <img src={property.image} alt={property.title} />
      <p>{property.description}</p>
      <p>Price: ${property.price}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};

export default PropertyDetails;
