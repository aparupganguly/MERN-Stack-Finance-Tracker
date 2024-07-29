import React from "react";
import "../styles/Navbar.css";
import { useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <p className="logo">Expenso</p>
      <div className="rightNav">
        <p className="yourExpenseButton">Your Expense</p>
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
