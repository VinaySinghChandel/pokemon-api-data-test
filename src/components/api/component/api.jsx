import React, { Component } from 'react';

import '../style/api.css';

class PokemonAPI extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
    }
    
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result.results
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }
    render() {
      var keywords = this.props.searchData.keywords;
      const { error, isLoaded, items } = this.state;
      return (
          <div className='api-data-display'>
              {items.map(item => (
                (item.name.indexOf(keywords.toLowerCase()) > -1 || item.name.indexOf(keywords.toUpperCase()) > -1) ? 
                  <div className='api-data-display-card' key={item.url}>
                    {item.name.toUpperCase()}
                  </div> : '' 
              ))}
          </div>
      )
    }
}

export default PokemonAPI;