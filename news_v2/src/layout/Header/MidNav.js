import React from "react";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

const MidNav = () => {
  return (
    <div className="container">
      <div
        style={{
          margin: "0px",
          padding: "0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/home">
          <img src="/logo.png" alt="logo" style={{ width: "100px" }} />
        </Link>
        <span>
          <DropdownButton
            id="dropdown-basic-button"
            size="sm"
            title="Choose language"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </span>
        <Button variant="warning">Log In!</Button>
      </div>
      <span>
        <input
          type="text"
          placeholder="Search"
          style={{ width: "100%", height: "40px", marginBottom: "8px" }}
        />
      </span>
    </div>
  );
};

export { MidNav };
