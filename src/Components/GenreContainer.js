import React from 'react'
// Any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ShowGenres from "./ShowGenres"

class GenreContainer extends React.Component{

    render(){

        console.log(this.props.genres)

        let arrayOfComponents = this.props.genres.map(genre => {  
        
            return ( <>
                <Link to={`/genres/${genre.id}`}>  <h2>{genre.name}</h2><img src={genre.img} alt={genre.description}></img> </Link>
                {/* <ShowGenres className="genrecard" key={genre.id} genre={genre} />  */}
                 </>
        )
        })
           
        return(
            <div className="genre-box">
                <h2>Published genre</h2>
                <ul>
                    {arrayOfComponents}
                </ul>
            </div>
        )
    }
}



// First argument of the first ():
    // mapStateToProps (Get information)
    // mapStateToProps is a callback:
        // mapStateToProps' first argument is the globalStateObj 
        // mapStateToProps returns a POJO that will be merged into the props of the component


let mapStateToProps = (gState) => {
    return {
        genres: gState.genreInfo.genres
    }
}

export default connect(mapStateToProps)(GenreContainer)