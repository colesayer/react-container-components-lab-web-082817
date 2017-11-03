import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {

    state = {
      reviews: []
    }


  componentDidMount() {
    fetch(`${URL}`, {mode: 'no-cors'})
     	.then(function(response) {
     		if (response.status >= 400) {
     			throw new Error("Bad response from server");
     		}
     		return response.json();
     	})
     	.then((json) => {
        // const movies = json.results
        this.setState({
          reviews: json.results
        })
     	})
   }


  render(){

    // for(const ele in movies){
    //   console.log(ele.display_title)}

    return(
        <div className="latest-movie-reviews">
          <MovieReviews reviews={this.state.reviews}/>
        </div>
    )
  }

}

export default LatestMovieReviewsContainer
