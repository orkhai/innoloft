import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 lg:py-7 bg-white">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link to="/">
          <img className="w-24 lg:w-32" src={logo} alt="Logo" />
        </Link>

        <button onClick={toggleMenu} className="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
          </svg>
        </button>

        {menuOpen ? (
          <>
            <div className="fixed top-0 left-0 h-screen w-full bg-overlay" />
            <div className="w-[300px] px-6 h-full top-0 right-0 fixed bg-white z-[999] overflow-y-auto duration-500 ease-in transition-[right] lg:hidden">
              <button
                className="block mt-[9px] mr-[-6px] float-right py-2 pl-2"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button>
              <ul className="pt-[70px] mt-4 font-bold">
                <li className="border-t-[1px] py-3 pl-2">
                  <Link to="/">Main</Link>
                </li>
                <li className="border-t-[1px] py-3 pl-2">
                  <Link to="/product">Product</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="w-[300px] h-full top-0 right-[-400px] fixed bg-white z-[999] overflow-y-auto duration-500 ease-in lg:hidden" />
        )}

        <ul className="w-[150px] hidden lg:flex lg:justify-between lg:items-center font-bold">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
