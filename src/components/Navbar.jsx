import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; 

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center">
          <span className="navbar-title mr-3">Pizzería Mamma Mía!</span>
          <Button variant="outline-light" className="mx-2" href="#home">🍕Home</Button>
          {token ? (
            <>
              <Button variant="outline-light" className="mx-2" href="#profile">Profile</Button>
              <Button variant="outline-light" className="mx-2" href="#logout">Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" className="mx-2" href="#login">🔒Login</Button>
              <Button variant="outline-light" className="mx-2" href="#register">🔒Register</Button>
            </>
          )}
        </Nav>
        <Button variant="outline-light">
          🛒 Total: {total.toLocaleString()}
        </Button>
      </div>
    </Nav>
  );
};

export default Navbar;




