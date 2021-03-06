import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
//console.log(this.props)
    return (
      <div className="search">
        <button onClick={() => this.props.swapFavorites()}>{this.props.showFaves ? 'Show Results' : 'Show Favorites'}</button>
        <br /><br />

        {/* Make the select options dynamic from genres !!! */}
        {/* How can you tell which option has been selected from here? */}
        
        {/* {this.props.movies.results.map(each =>( 
          <option value={each[""]}>{each[""]}</option>))} */}
        <select>
        {this.props.genres.generes.map(each =>( 
          <option value={each["name"]}>{each["name"]}</option>
          ))}
         {/* <option value="theway">The Way</option>
          <option value="theway">The Way</option>
          <option value="thisway">This Way</option>
          <option value="thatway">That Way</option> */}
        </select>
        <br /><br />

        <button>Search</button>

      </div>
    )
  }
}

export default Search;
