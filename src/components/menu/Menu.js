import React, { useState, useEffect, useRef } from "react";
import "./menu.css";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let auxHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", auxHandler);

    return () => {
      document.removeEventListener("mousedown", auxHandler);
    };
  });

  return domNode;
};

function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  let domNode = useClickOutside(() => {
    setToggleMenu(false)
  })

  return (
    <div className="nav-area" ref={domNode}>
      <button className="btn-menu" onClick={toggleNav}>
        Menu
      </button>

      <nav className="nav-menu">
        {toggleMenu && (
          <ul className="list">
            <li>
              <a className="items" href="#about">
                Início
              </a>
            </li>
            <li>
              <a className="items" href="#courses">
                Cursos
              </a>
            </li>
            <li>
              <a className="items" href="#learning">
                Projetos
              </a>
            </li>
            <li>
              <a className="items" href="#contact">
                Contato
              </a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Menu;
