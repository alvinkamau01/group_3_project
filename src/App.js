import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/" element={<PropertyList user={user} />} />
        {user?.role === "agent" && (
          <Route path="/add-property" element={<PropertyForm />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
