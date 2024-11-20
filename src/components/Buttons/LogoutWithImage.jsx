import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

export default function LogoutWithImage() {
  const { user, signOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    signOutUser();
    // console.log("Logout");
  };
  return (
    <div
      className="flex flex-row gap-2 items-center justify-center "
      >
      <img
        src={user.photoURL}
        alt="User Avatar"
        className=" border w-10 h-10 rounded-full hidden md:flex"
      />
      <button onClick={handleLogout} className="btn btn-error">Logout</button>
    </div>
  );
}
