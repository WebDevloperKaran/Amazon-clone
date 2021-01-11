import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"
        alt=""
        srcset=""
        className="header__logo"
      />

      {/* {Searchbar} */}
      <div className="header__search">
        <input type="text" className=" header__searchInput " />
        {/* Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineone">Hello Guest</span>
          <span className="header__optionLineone">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLinetwo">Returns</span>
          <span className="header__optionLinetwo"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLinethree">Your</span>
          <span className="header__optionLinethree">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
