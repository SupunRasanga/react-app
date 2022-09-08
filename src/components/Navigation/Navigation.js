import React from "react";

function Navigation(){
    return (
        <nav className="navbar navbar-light bg-dark">
            <a className="navbar-brand text-light">User Management</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Navigation;