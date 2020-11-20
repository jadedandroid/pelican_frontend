import React from 'react'
import {connect} from 'react-redux'
import UpdateAuthor from './UpdateAuthor';
import Button from "@material-ui/core/Button"
import AddPubFromAuthor from "./AddPubFromAuthor"
// import AddAuthorForm from './AddAuthorForm'

function ShowAuthor(props){
    console.log(props)
    let foundAuthor = props.foundAuthor
    // let {id} = props.id
    const handleDeleteAuthor = () => {
                fetch(`http://localhost:3000/authors/${props.foundAuthor.id}`, {
                  method: "DELETE",
                })
                  .then((res) => res.json())
                  .then((deletedObj) => {
                    // console.log(deletedObj);
                    props.deleteAuthor(deletedObj);
                    props.history.push("/");
                  });
              };
            
    // const handleUpdateAuthor = () => {

    //     return <UpdateAuthor foundAuthor = {foundAuthor}/>
    // };

            
    
    return(
        <div>
            <h2> Mr {foundAuthor.first_name} {foundAuthor.last_name}</h2>
            {/* <AddAuthorForm author={foundAuthor}/> */}
            <img src={foundAuthor.img} alt={foundAuthor.first_name}/>
             <h2> {foundAuthor.bio}</h2>
             <h2> Country of residence {foundAuthor.residence}</h2>
             <UpdateAuthor foundAuthor = {foundAuthor}/>
             <AddPubFromAuthor foundAuthor = {foundAuthor}/>
             <Button  variant="contained" color="secondary" onClick={handleDeleteAuthor}
                >
                  <h2>Delete {foundAuthor.first_name} from website</h2>
                </Button>

        </div>
    )

    };

    let deleteAuthor = (author) => {
        return {
          type: "DELETE_AUTHOR",
          payload: author,
        };
      };
      
      let mapDispatch = {
        deleteAuthor: deleteAuthor,
      };

// let mapStateToProps = (gState, ownProps) => {
//     return {}

// }


export default connect(null, mapDispatch)(ShowAuthor)