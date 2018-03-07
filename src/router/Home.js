import React, { Component } from 'react';
import Header from './Header';
//import FontAwesome from 'react-fontawesome';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false,
        };
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
        //test.removeEventListener("mouseenter")
    }

    handleMouseOver(event) {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        return (
            <div>
                <Header mode={this.props.mobileMode} />
                <div>
                    <p> This is Home Page</p>
                    <ul id="test">
                        <li
                            onMouseOver={(e) => this.handleMouseOver(e)}
                            onMouseLeave={(e) => this.handleMouseOver(e)}
                        >item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                    </ul>
                    <p>{this.state.isToggleOn ? "Yes" : "No"}</p>
                </div>
            </div>
        );
    }
}

export default Home;