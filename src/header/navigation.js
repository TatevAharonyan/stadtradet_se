
import React from "react";
import { NavLink } from "react-router-dom";

const Navigations = ({ saction, href, keyAt, activeClass }) => {

    return (
        <li className="nav"
            key={keyAt}
        >
            <NavLink exact to={href}
                activeClassName={activeClass}
                className="nav_a"
                key={keyAt}
            >
                {saction}
            </NavLink>

        </li>
    )
}

export default Navigations;