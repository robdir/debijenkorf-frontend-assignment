import React, { Component } from 'react';
import SearchBox from './searchBox'
import './styles/container.css'

class Container extends Component {
    render() {
        return (
            <div className="container">
                <SearchBox />
            </div>

        );
    }
}

export default Container;
