import React from 'react'
import {connect} from 'react-redux'
// import AddAuthorForm from './AddAuthorForm'

function ShowPub(props){
    
    let foundPub = props.pubs
    // let {id} = props.id
    const handleDeletePub = () => {
                fetch(`http://localhost:3000/publications/${props.foundPub.id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((deletedObj) => {
                    // console.log(deletedObj);
                    props.deletePub(deletedObj);
                    props.history.push("/");
                  });
              };
            
    // const handleUpdatePub = () => {

    //     return <UpdatePub foundPub = {foundPub}/>
    // };

            
    console.log(foundPub)
    return(
        <div>
            <h2> {foundPub.title} {foundPub.rating}</h2>
            {/* <AddPubForm Pub={foundPub}/> */}
            <img src={foundPub.img1} alt={foundPub.title}/>
             <h2> {foundPub.description}</h2>
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


export default connect(null, mapDispatch)(ShowPub)