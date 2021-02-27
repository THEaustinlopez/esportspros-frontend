import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationContainer = props => {
        return (
            <div className="nav-container">
                <div className="nav-wrapper">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
        
                    <div className="nav-link-wrapper">
                        <NavLink to="/stats" activeClassName="nav-link-active">
                            Stats
                        </NavLink>
                    </div>
        
                    <div className="nav-link-wrapper">
                        <NavLink to="/teams/:id" activeClassName="nav-link-active">
                            Teams
                        </NavLink>
                    </div>
        
                    <div className="center-title">esports pros</div>
                </div>
            </div>
        )
    };

export default withRouter(NavigationContainer);


