import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CHECK_AUTH_URL } from "../utils/constants";
import { loginUser, logoutUser } from "../utils/store/userSlice";
import Loading from "../pages/Loading";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authCheck = async () => {
      try {
        const response = await axios.get(CHECK_AUTH_URL, {
          withCredentials: true,
        });
        if (response.status === 200) {
          dispatch(loginUser(response.data.user));
        }
      } catch (error) {
        dispatch(logoutUser());
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    authCheck();
  }, [dispatch]);

  if (loading) {
    return <Loading dimensions={'h-screen w-screen'}/>
  }

  return <>{children}</>;
};

export default AuthProvider;
