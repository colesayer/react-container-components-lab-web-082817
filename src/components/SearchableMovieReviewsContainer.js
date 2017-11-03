import React, { Component } from 'react';
import MovieReviews from './MovieReviews'



class SearchableMovieReviewsContainer extends Component{

  state = {
    searchTerm: "",
    reviews: []
  }

  handleChange = event => {
    let searchTerm = event.target.value
    this.setState({
      searchTerm: searchTerm
    })
    console.log("HandleChange: ", searchTerm)

  }



  handleSubmit = event => {
    event.preventDefault()

    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    let search_term = this.state.searchTerm
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `query=${search_term}` + `&api-key=${NYT_API_KEY}`;

    fetch(`${URL}`, {mode: 'no-cors'})
     	.then((response) => {
     		if (response.status >= 400) {
     			throw new Error("Bad response from server");
     		}
     		return response.json();
     	})
     	.then((json) => {
        this.setState({
          reviews: json.results
        })
     	})
   }


  render(){
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm}/>
          <input type="submit" value="Search Movie Reviews"/>
        </form>
        <div>
          <MovieReviews reviews={this.state.reviews}/>
        </div>

      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
