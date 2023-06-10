import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("User logout");
      })
      .catch((err) => console.log(err?.message));
  };

  // Home, All Toys, My Toys, Add A Toy, Blogs
  const links = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "All Toys",
      path: "/all-toys",
    },
    {
      id: 3,
      name: "My Toys",
      path: "/my-toys",
    },
    {
      id: 4,
      name: "Add a toy",
      path: "/add-toy",
    },
    {
      id: 5,
      name: "Blogs",
      path: "/blogs",
    },
  ];
  return (
    <nav className="container">
      <div className="navbar">
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links?.map((link) => (
                <li key={link.id}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active text-lg" : " text-lg"
                    }
                    to={link.path}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links?.map((link) => (
              <li key={link.id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active text-lg" : " text-lg"
                  }
                  to={link.path}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {user && user?.displayName ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className=" z-50 mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.displayName}</a>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li onClick={handleLogout}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
