import React from "react";
import Title from "../assets/images/Title.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./nav.css";

export default function Naver() {
  return (
    <div>
      <Link to="/">
        <img className="logo" src={Title} alt="" />
      </Link>
      <nav>
        <CustomLink className="link" to="/projects">
          Projetos
        </CustomLink>
        <CustomLink className="link" to="/contato">
          Contato
        </CustomLink>
        <CustomLink className="link" to="/hobbies">
          Hobbies
        </CustomLink>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <span>
      <Link className={isActive ? "active" : ""} {...props} to={to}>
        {children}
      </Link>
    </span>
  );
}
