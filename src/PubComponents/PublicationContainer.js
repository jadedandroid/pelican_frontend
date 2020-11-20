import React from 'react'
// Any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ShowPub from "./ShowPub"
import Grid from "@material-ui/core/Grid"
import {makeStyles, mergeClasses} from "@material-ui/styles"
import pubContainer from "./PubContainer"
import PubContainer from './PubContainer'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


class PublicationContainer extends React.Component{
  useStyles = makeStyles({
    pubContainer: {
      paddingTop: "20px",
      paddingLeft: "50px",
      paddingRight: "50px"
    }

  })

  
    render(){
      {/* <PubContainer></PubContainer> */}
         
        console.log(this)
        console.log(this)
        let arrayOfComponents = this.props.publications.map(publication => {
                return (<>
                <ShowPub className="publicationcard" key={publication.id} pubs={publication}/>
                {/* <Link to={`/publications/${publication.id}`}> {publication.title} {publication.genre.name} <br></br> <img src={publication.img1} alt={publication.description}></img> </Link> */}
                {/* <PubContainer className="publicationcard" key={publication.id} pubs={publication}/> */}
                {/* <Link to={`/publications/${publication.id}`}> {publication.title} {publication.genre} </Link> */}
            
                 
        </>           
        )
        })
        console.log(arrayOfComponents)

        return(
            <div className="publication-box">
                <h2>Published publication</h2>
                
                <Grid container spacing={2} className="pubContainer">
                  <Grid item xs = {12}>
                  
            <Card>
                <CardContent><ShowPub>
                  </ShowPub> </CardContent>
            </Card>
        
                    
                  {arrayOfComponents}  
                  </Grid>

                  
                </Grid>
                    
               
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
      
    //   allpublications: gState.publicationsInfo,
    //   allGenres: gState.genreInfo.genres
      publications: gState.publicationInfo.pubs
    }
  }

// //   Link to={`/publications/${publication.id}`}> {publication.title}
//  {publication.genre} <br></br> <img src={publication.img} 
//  alt={publication.title}></img> </Link>


export default connect(mapStateToProps)(PublicationContainer)

