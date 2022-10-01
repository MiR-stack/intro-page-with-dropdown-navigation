import { Link } from "react-router-dom";
import "./nav.scss";

import { ReactComponent as Arrow_down } from "../../../../assets/images/icon-arrow-down.svg";
import { ReactComponent as Arrow_up } from "../../../../assets/images/icon-arrow-up.svg";

const Nav = ({ data }) => {
  function NavItem({ item }) {
    if (item.type === "dropdown") {
      return (
        <li  className="dropdown_menu">
          <p>
            {item.name} <span className="up">{<Arrow_up />} </span>
            <span className="down">{<Arrow_down />} </span>{" "}
          </p>
          <ul className="dropdown_wraper">
            {item.items.map((navItem) => (
              <li key={navItem.id} className="dropdown_item">
                <Link to={navItem.path}>
                  {navItem.icon && <span>{<navItem.icon />} </span>}
                  {navItem.name}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    } else {
      return (
        <li >
          <Link to={item.path}>{item.name} </Link>
        </li>
      );
    }
  }

  return (
    <ul>
      {data.map((navItem) => (
        <NavItem key={navItem.id} item={navItem} />
      ))}
    </ul>
  );
};

export default Nav;
