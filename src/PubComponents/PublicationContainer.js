import React from 'react'
// Any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ShowPub from "./ShowPub"

class PublicationContainer extends React.Component{

    render(){
        console.log(this.props)
        console.log(this)
        let arrayOfComponents = this.props.publications.map(publication => {
                return (<>
                <ShowPub className="publicationcard" key={publication.id} pubs={publication}/>
                {/* <Link to={`/publications/${publication.id}`}> {publication.title} {publication.genre} </Link> */}
            
                 
        </>           
        )
        })
        console.log(this.props.publications)

        return(
            <div className="publication-box">
                <h2>Published publication</h2>
                <ul>
                    {arrayOfComponents}
                </ul>
            </div>
        )
    }

}


// let setPubs = (array) => {
//     return {
//       type: "SET_PUBS",
//       payload: array
//     }
//   }
//   let mapDispatchToProps = {
//     setPubs: setPubs
    
//   };

  let mapStateToProps = (gState) => {
   console.log(gState.publicationInfo.pubs) 
   return {
      
    //   allAuthors: gState.authorsInfo,
    //   allGenres: gState.genreInfo.genres
      publications: gState.publicationInfo.pubs
    }
  }

// //   Link to={`/publications/${publication.id}`}> {publication.title}
//  {publication.genre} <br></br> <img src={publication.img} 
//  alt={publication.title}></img> </Link>


export default connect(mapStateToProps)(PublicationContainer)

