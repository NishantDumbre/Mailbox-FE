import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../utils/store/appStore";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { FaPencil } from "react-icons/fa6";
import { logoutUser } from "../../utils/store/userSlice";
import { NavbarPropsInterface } from "../../utils/interfaces/homeInterfaces";
import axios from "axios";
import { LOGOUT_URL } from "../../utils/constants";

const Navbar = ({ onToggleLoading, onToggleEditor }: NavbarPropsInterface) => {
  const dispatch = useDispatch();
  const showNavbar = useSelector(
    (store: StoreState) => store.config.showNavbar
  );

  const logoutHandler = async () => {
    Cookies.remove("auth_token", { path: "/" });
    onToggleLoading(true);
    try {
      const response = await axios.get(LOGOUT_URL, { withCredentials: true });
      console.log(response.data?.message);
    } catch (error: any) {
      console.log(error);
    } finally {
      setTimeout(() => {
        onToggleLoading(false);
        dispatch(logoutUser());
      }, 2000);
    }
  };

  const toggleEditorHandler = () => {
    onToggleEditor(true);
  };

  return (
    <>
      {showNavbar && (
        <div className="w-3/12 bg-gray-200 flex-grow shadow-lg">
          <button
            className="shadow-lg hover:shadow-cyan-200 hover:cursor-pointer px-7 py-5 bg-cyan-300 rounded-2xl text-lg mx-auto my-5 flex justify-center items-center"
            onClick={toggleEditorHandler}
          >
            <FaPencil /> <span className="mx-5">Compose</span>
          </button>
          <div className="my-10 w-10/12 mx-auto">
            <Link to="/home/inbox">
              <div className="border border-cyan-300 hover:shadow-cyan-200 hover:cursor-pointer bg-gray-100 shadow-md p-3 my-3 rounded-lg">
                Inbox
              </div>
            </Link>
            <Link to="/home/starred">
              <div className="border border-cyan-300 hover:shadow-cyan-200 hover:cursor-pointer bg-gray-100 shadow-md p-3 my-3 rounded-lg">
                Starred
              </div>
            </Link>
            <Link to="/home/sent">
              <div className="border border-cyan-300 hover:shadow-cyan-200 hover:cursor-pointer bg-gray-100 shadow-md p-3 my-3 rounded-lg">
                Sent
              </div>
            </Link>
          </div>

          <div
            className="border border-cyan-300 hover:shadow-cyan-200 hover:cursor-pointer bg-gray-100 shadow-md p-3 my-16 w-10/12 mx-auto rounded-lg"
            onClick={logoutHandler}
          >
            Logout
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
