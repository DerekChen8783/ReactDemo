import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../constant/images.jpeg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            //mobileMode: this._checkMode(),
            isHeaderFixed: false
        };
        this.handleScoll=this.handleScoll.bind(this);
        //this.updateDimensions=this.updateDimensions.bind(this);
    }

    // _checkMode() {
    //     const width = window.innerWidth || document.body.clientWidth;
    //     const isMobile = width < 800 ? true : false;//normally we need some constant width instead of 600 here
    //     return isMobile;
    // }

    componentDidMount() {
        //window.addEventListener("resize", this.updateDimensions);
        window.addEventListener("scroll", this.handleScoll);   
    }

    componentWillUnmount() {
        //window.removeEventListener("resize", this.updateDimensions);
        window.removeEventListener("scroll", this.handleScoll);
    }

    // updateDimensions() {
    //     this.nonFixedHeaderHeight = document.getElementById('container').clientHeight|| 0;
    //     this.setState(prevState => ({
    //         mobileMode: this._checkMode(),
    //     }));
    // }

    handleScoll() {
        this.nonFixedHeaderHeight = document.getElementById('container').clientHeight||0;
        console.log("header hight", this.nonFixedHeaderHeight);
        const headerFixed = window.scrollY < this.nonFixedHeaderHeight ? false : true;
        if (this.state.isHeaderFixed !== headerFixed) {
            this.setState(prevState => ({
                isHeaderFixed: headerFixed
            }));
        }

    }

    // shouldComponentUpdate(nextProp, nextState) {
    //     if (JSON.stringify(nextState) === JSON.stringify(this.state)) {
    //         return false;
    //     }
    //     return true;
    // }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
        console.log(JSON.stringify(this.state, null, 2));
    }

    renderNormalHeader() {
        return (
            <div className="app-header">
                <div className="header-top-container" id='container'>
                    <img className="app-logo" src={logo} alt="logo" />
                    <div className="header-search-bar">
                        <input type="text"></input>
                        <button
                            onClick={() => this.handleClick()}
                            type="button"
                            name="Search"
                        >
                            {this.state.isToggleOn ? 'ON' : 'OFF'}
                        </button>
                    </div>
                </div>
                <div className={this.state.isHeaderFixed ? "fixed-header" : null}>
                    <nav >
                        <ul className="nav-bar">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/a" >Group A</Link></li>
                            <li><Link to="/b" >Group B</Link></li>
                            <li><Link to="/c" >Group C</Link></li>
                            <li><Link to="/d" >Group D</Link></li>
                            <li><Link to="/about" >About</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }

    renderMobileHeader() {
        return (
            <div className="app-header" id='container'>
                <p>mobile header comming soon...</p>
            </div>
        )
    }

    render() {
        console.log(this.props.mode);
        return (
            this.props.mode ? this.renderMobileHeader():this.renderNormalHeader()
        );
    }
}

export default Header;