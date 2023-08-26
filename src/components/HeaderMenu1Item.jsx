import classNames from "classnames";
import { NavLink } from "react-router-dom";

const HeaderMenu1Item = ({ to, children, isActive }) => {
    return (
      <li>
        <NavLink
          isActive={isActive}
          className={({ isActive }) =>
            classNames(
              "h-full",
              "px-2",
              "flex",
              "items-center",
              "justify-center",
              { "text-red-500": isActive }
            )
          }
          to={to}
        >
          {children}
        </NavLink>
      </li>
    );
};

export default HeaderMenu1Item;