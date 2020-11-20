import React, {useState} from 'react'
import {connect} from 'react-redux'
// import AddAuthorForm from './AddAuthorForm'
import {Grid} from  "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Theme from "@material-ui/styles"
import {Link} from 'react-router-dom'



import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {CardActions, CircularProgress} from '@material-ui/core';

const useStyles = makeStyles({
    pubCont: {
        paddingTop: "20px",
        paddingRight: "50px",
        paddingLeft: "50px",
        backgroundColor: "#6de060"
    },
    pub: {
      backgroundColor: "#FFBA60"
    }
});




const PubContainer = (props) => {
    
//     console.log(props)
//     return(
//     <>
//     <h2>Published publication</h2>
//     <Grid container spacing={2} className="pubContainer">
//           {getPubCard()};
//         {/* <Grid item xs = {6}>
//         {arrayOfComponents}  
//         </Grid>  */}
//     </Grid>
// </>
//     )
    
    
}



function ShowPub(props){
const classes = useStyles();

//  console.log(props.pubs)

const getPubCard = () => {
  console.log(props.pubs)
  
    return (
        <Grid item xs={4}>
            <Card>
              <CardMedia> 
                className={classes.CardMedia}
                 </CardMedia>
                <CardContent>Hell </CardContent>
            </Card>
        </Grid>
    )
}

    
    const pubCard = getPubCard();
    // let [foundPub, SetFoundPub] = useState(props.foundPub);
    // let arrayOfPubs = props.pubs.map((pub)=> { 
    //   return <pubCard 
    //   key={pub.id}
    //   title={pub.title}
    //   img={pub.img1}
    //   desc={pub.description}


 
      console.log(props.publications)
   


    // let {foundPub} = props.foundPub
    return(
      <>

      {/* <Link to={`/publications/${publication.id}`}> {publication.title} {publication.genre.name} <br></br> <img src={publication.img1} alt={publication.description}></img> </Link> */}
      
        <div>
          <h1> Displaying info for publication </h1>
          {props.pubs ? (
           <Grid container spacing={2} className={classes.pubCont} >
             <Grid item xs={4} className={classes.pub} >
              <Card>
              <CardMedia> <img src={props.pubs.img1} alt={props.pubs.title}/>
                 </CardMedia>
                <CardContent>  <h1> {props.pubs.title} Rated {props.pubs.rating}/10 </h1> </CardContent>
            </Card>
            
        </Grid>
        
              
             
            {/* <h2> A {props.pubs.genre.name} book written by {props.pubs.author.first_name} {props.pubs.author.last_name}  </h2> */}
            
            
             <h2> {props.pubs.description}</h2> 
                
               </Grid>
          ) : (
            <CircularProgress/>

          
               
              )}
              
             

           


             {/* <h2> {foundPub.publications}</h2> */}
            {/* <AddPubForm Pub={foundPub}/> */}
             {/* <button
                 onClick={handleUpdatePub}>


                 <h2>update Bio</h2>
              </button> */}

             {/* <button
                  onClick={handleDeletePub}
                >
                  <h2>delete</h2>
                </button> */}


             
        </div>
        </>
    )

    };

    let deletePub = (pub) => {
        return {
          type: "DELETE_PUB",
          payload: pub,
        };
      };
      
      let mapDispatch = {
        deletePub: deletePub,
      };

// let mapStateToProps = (gState, ownProps) => {
//     return {}

// }


let mapStateToProps = (gState) => {
  console.log(gState.publicationInfo.pubs) 
  return {
     
   //   allpublications: gState.publicationsInfo,
   //   allGenres: gState.genreInfo.genres
     publications: gState.publicationInfo.pubs
   }
 }



 

export default connect(mapStateToProps, mapDispatch)(ShowPub)





  // let {id} = props.id
    // const handleDeletePub = () => {
    //             fetch(`http://localhost:3000/publications/${props.foundPub.id}`, {
    //               method: "DELETE",
    //             })
    //               .then((res) => res.json())
    //               .then((deletedObj) => {
    //                 // console.log(deletedObj);
    //                 props.deletePub(deletedObj);
    //                 props.history.push("/");
    //               });
    //           };
            
    // // const handleUpdatePub = () => {

    // //     return <UpdatePub foundPub = {foundPub}/>
    // // };


