import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

    onFormSubmit=(e)=>{
        e.preventDefault();
        
       this.props.userSubmit(this.state.term)
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field ">
            <label>Image Search</label>
            <input
              onChange={(e) => this.setState({ term: e.target.value })}
              value={this.state.term}
              type="text"
              placeholder="Search any image "
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
