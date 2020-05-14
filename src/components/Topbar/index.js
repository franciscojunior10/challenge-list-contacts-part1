import React, { Component } from 'react';

// import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import logo from '../../assets/img/logo.jpg';

import './styles.css';

export default class Topbar extends Component {
    render() {
        return (
            <header className="topbar">
                <div className="container">
                    <a href="/" className="top__logo">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
            </header>
        )
    }
}