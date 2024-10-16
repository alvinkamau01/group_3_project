import React from 'react';

const Listings = () => {
    return (
      <div className="listings-section">
        <div className="container">
          <h2 className="listings-section-title text-center">Featured Listings</h2>
          <div className="listings-content-wrapper">
            {/* Card 1 */}
            <div className="listing-card">
              <div className="listing-image-wrapper">
                <img src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D" className="listing-image" alt="Luxurious Mansion" />
              </div>
              <div className="listing-content">
                <h3 className="listing-title">Luxurious Mansion</h3>
                <p className="listing-description">Experience the epitome of luxury living in this stunning mansion with breathtaking views and state-of-the-art amenities.</p>
                <div className="listing-actions">
                  <a href="#" className="listing-button primary">View Details</a>
                </div>
              </div>
            </div>
  
            {/* Card 2 */}
            <div className="listing-card">
              <div className="listing-image-wrapper">
                <img src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D" className="listing-image" alt="Modern City Apartment" />
              </div>
              <div className="listing-content">
                <h3 className="listing-title">Modern City Apartment</h3>
                <p className="listing-description">Discover urban living at its finest in this sleek, modern apartment located in the heart of the city.</p>
                <div className="listing-actions">
                  <a href="#" className="listing-button primary">View Details</a>
                </div>
              </div>
            </div>
  
            {/* Card 3 */}
            <div className="listing-card">
              <div className="listing-image-wrapper">
                <img src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuc2lvbnxlbnwwfHwwfHx8MA%3D%3D" className="listing-image" alt="Cozy Suburban Home" />
              </div>
              <div className="listing-content">
                <h3 className="listing-title">Cozy Suburban Home</h3>
                <p className="listing-description">Find your perfect haven in this charming suburban home, complete with a spacious backyard and top-notch schools.</p>
                <div className="listing-actions">
                  <a href="#" className="listing-button primary">View Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };



  export default  Listings;
  