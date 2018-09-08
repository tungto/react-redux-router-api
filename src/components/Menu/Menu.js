import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'Quan ly san pham',
        to: '/product-list',
        exact: true
    }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    showMenu(menus) {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }

    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand">Shop</a>
                <ul className="nav navbar-nav">
                    {this.showMenu(menus)}
                </ul>
            </div>
        );
    }
}

export default Menu;
