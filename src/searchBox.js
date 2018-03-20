import React, {PureComponent} from 'react'
import './styles/searchbox.css'

class SearchBox extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.onInputChange = this.onInputChange.bind(this)

    }

    onInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        })
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    render() {
        return (
            <div className="searchcontainer">
                <div className="search">
                    <input className="input"
                    type="text"
                    placeholder="Zoeken"
                    ref={(input) => {this.nameInput = input}}
                    onChange={this.onInputChange}
                    value={this.state.searchTerm}
                    />

                    {this.state.searchTerm !== "" ?
                     (<img className="control"
                        src="http://www.i2symbol.com/force_download.php?file=images/symbols/punctuation/modifier_letter_small_x_u02E3_icon_256x256.png"
                        alt="form control"
                        onClick={this.removeInput.bind(this)}
                         /> ): null }


                        <img className="glass"
                        src="https://image.flaticon.com/icons/png/128/34/34202.png"
                        alt="search icon"/>
                </div>
            </div>
        )
    }
}

export default SearchBox