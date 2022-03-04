import React from "react";
import Menu from "./Menu";

const Header = () =>{
    return(
        <div className="Header">
            <div className="clearfix">
                <div className="Logo">
                    <h2>Logo</h2>
                </div>
                <div className="menu">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header;