import React from "react";

const AuthNavs = ({openAuthModal}) => {
  return (
    <div className="navbar-end">
      <button
        className="btn"
        onClick={openAuthModal}
      >
        Login
      </button>
    </div>
  );
};

export default AuthNavs;
