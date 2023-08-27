import { useState } from "react";
import { useStateContext } from "../context/StateContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useStateContext();

  return (
    <nav className="flex bg-white rounded-sm shadow-lg shadow-emerald-50 py-2 px-2 flex-row items-center justify-between">
      <div className="">LOGO</div>
      <div className="flex flex-row items-center justify-center gap-4">
        <Link to={'/cart'}>
          <div className="bg-btnbgColor px-2 rounded text-btntextColor ">
            Item <span className="text-gray-700">{cart.length}</span>
          </div>
        </Link>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search ...."
          className="border border-gray-100  ring-1 ring-gray-200 rounded px-2 w-44 outline-none"
        />
      </div>
    </nav>
  );
};

export default NavBar;
