import React from "react";
import { Link } from "react-router-dom";

const Menu = () =>{
    return(
        <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/userlist">User</Link>
            <Link to="/crudlist">CrudList</Link>
            <Link to="/">Gallery</Link>
            <Link to="/crudform">CrudForm</Link>

        </div>
    )
}

export default Menu;