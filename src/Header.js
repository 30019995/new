import React, { Component } from "react";
class Header extends Component
{
    render(){
        return(
            <nav className ="navbar sticky-top navbar-dark bg-dark">
                <div className ="container-fluid">
                    <a className ="navbar-brand" href="#">SCP FOUNDATION</a>
                </div>
            </nav>
        );
    }

}
export default Header;