import React from "react";

const Splash = ({ logoRef }) => {
  return (
    <div className="splash container">
      <div className="imageContainer">
        <img src="./logo.png" alt="Russ Giving Logo" ref={logoRef} />
      </div>
    </div>
  );
};

export default Splash;
