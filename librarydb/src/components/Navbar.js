import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper" style={{ backgroundColor: "#92a8d1" }}>
        <a href="#" className="brand-logo" style={{
          position: 'absolute', left: '42%', top: '65%',
          transform: 'translate(-50%, -50%)'
        }}><img src={"https://www.pinclipart.com/picdir/big/519-5194636_free-book-clipart-transparent-book-images-and-book.png"}
          alt=""
          style={{height: "50px" }} /></a>
        <Link to="/" className="brand-logo" style={{fontWeight: "bold",fontFamily:"Times New Roman",
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          Library DB</Link>

      </div>
    </nav>
  );
}

export default NavBar;