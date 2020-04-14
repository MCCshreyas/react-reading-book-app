import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export const Navbar = () => {
  const { getBookCount } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Shreyas reading list</h1>
      <p>Currently you have {getBookCount()} books to get through...</p>
    </div>
  );
};
