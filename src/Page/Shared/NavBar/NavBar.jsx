import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navMenu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-red-700 hover:border-green-700"
              : "hover:border-green-700 hover:border-b-4"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-red-700 hover:border-green-700"
              : "hover:border-green-700 hover:border-b-4"
          }
          to="/info"
        >
          President Info
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "border-b-4 border-red-700 hover:border-green-700"
              : "hover:border-green-700 hover:border-b-4"
          }
          to="/voteNow"
        >
          Vote Now
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navMenu}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Voting</a>
        </div>
        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal gap-5 px-1">{navMenu}</ul>
          </div>
          <div>
            <a className="btn">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
