import React from 'react';

class Movies extends React.Component {
  constructor(props, { movies }) {
    super(props, { movies });
    this.state = {
      // movies = this.props.movies
    };
  }
  render() {
    //console.log(this.props.movies.results)
    return (
      <ul className="movies">
        {this.props.movies.results.map(each => (
          <li className={each['original_title']}>
            <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
            <div className="movie_description">
              <h2>{each['overview']}</h2>
              <section className="movie_details">
                <div className="movie_year">
                  <span className="title">Year</span>
                  <span>{each['release_date']}</span>
                </div>
                <div className="movie_rating">
                  <span className="title">Rating</span>
                  <span>{each['vote_average']}</span>
                </div>
              </section>
            </div>
          </li>
        ))}
      </ul>
    );
  }




  //"this.props.movies.results[0]['poster_path']"
  //this.props.movies.results[0]['title']

  //return (
  // for(var i = 0; i < this.props.movies.results.length;i++){

  // }



  //   {/* <li className="this.props.results[0]['title']">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description"> 
  //       <h2>{this.props.movies.results[0]['title']}</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li>
  //   <li className="movie_item">
  //     <img src="https://lh3.googleusercontent.com/97gnjRiv2zIRnDupzfxYFoI-6zlIK3jKgb6KOCDf_tjWkY9epbITdSFIbiKhuccOqQ=w300" />
  //     <div className="movie_description">
  //       <h2>De Wae</h2>
  //       <section className="movie_details">
  //         <div className="movie_year">
  //           <span className="title">Year</span>
  //           <span>2018</span>
  //         </div>
  //         <div className="movie_rating">
  //           <span className="title">Rating</span>
  //           <span>10.0</span>
  //         </div>
  //       </section>
  //     </div>
  //   </li> */}

  // {/* </ul> */}
  //);
}


export default Movies;
