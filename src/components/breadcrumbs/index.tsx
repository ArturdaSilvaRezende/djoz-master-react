import * as C from "./style";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

type title = {
  title: string;
};

export const Breadcrumbs = (props: title) => {
  return (
    <C.Breadcrumbs>
      <div>
        <NavLink to="/">
          <span>
            <FaHome />
          </span>
          <span>Home</span>
        </NavLink>
        <div className="breadcrumbs__bar"></div>
        <h2>{props.title}</h2>
      </div>
    </C.Breadcrumbs>
  );
};
