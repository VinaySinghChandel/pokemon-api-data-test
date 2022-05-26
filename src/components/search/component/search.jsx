import React, { Component } from 'react';

import '../style/search.css';
import PokemonAPI from '../../api/component/api';

class Search extends Component {
    state = {
        keywords : ''
    }
    inputChangeHandler = (event) => {
        this.setState({
            keywords : event.target.value
        });
    }
    render() {
        const keywords = this.state;
        return (
            <div>
                <div className='api-search-header'>
                    <div>
                        <input 
                            type="text" 
                            className='api-search-box' 
                            placeholder='Type to Search Pokemon....'
                            onChange={this.inputChangeHandler} 
                        />
                    </div>
                </div>
                <PokemonAPI searchData={keywords}/>
            </div>
        )
    }
}

export default Search;