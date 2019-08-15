import React from "react";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h1 className="Sidebar__h1">
        Dad <span className="Sidebar__cursive">Jokes</span>
      </h1>
      <span
        className="Sidebar__icon"
        role="img"
        aria-label="Face With Tears of Joy"
      >
        😂
      </span>
      <button className="Sidebar__btn">New Jokes</button>
    </div>
  );
};

export default Sidebar;
