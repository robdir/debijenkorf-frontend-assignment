import React, {PureComponent} from 'react'
import './styles/searchbox.css'

class SearchBox extends PureComponent {
    render() {
        return (
            <div className="searchcontainer">
                <div className="search">
                    <input className="input"
                    type="text"
                    placeholder="Zoeken"/>
                    <img className="glass"
                     src="https://image.flaticon.com/icons/png/128/34/34202.png"
                     alt="search icon"/>
                </div>
            </div>
        )
    }
}

export default SearchBox