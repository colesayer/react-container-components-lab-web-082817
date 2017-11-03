
import React from 'react'

const MovieReviews = ({reviews}) => {
  return (
    <ul className="review-list">
      {reviews.map((movie, idx) => <li className="review" key={idx}> <strong>{movie.display_title}</strong> {movie.headline} </li>)}
    </ul>
  )
}

MovieReviews.defaultProps = {reviews: "No Reviews."}

export default MovieReviews
// import React, { Component } from 'react'
//
// class MovieReviews extends Component {
//   render(){
//
//     console.log(this.props.reviews)
//
//     let movies = this.props.reviews.map((movie, idx) => {
//       return <li className="review" key={idx}> <strong>{movie.display_title}</strong> {movie.headline} </li>
//     })
//
//
//     return(
//       <ul className="review-list">
//         {movies}
//       </ul>
//       )
//   }
// }

// export default MovieReviews

// const Book = ({ title, img_url }) => {
//   return (
//     <div className="book">
//       <img src={img_url} />
//       <h3>{title}</h3>
//     </div>
//   )
// }
//
// const BookList = ({ books }) => (
//   <div className="book-list">
//     {books.map(book => <Book title="book.title" img_url="book.image_url" />)}
//   </div>
// );
