import React from 'react'
// Any component that needs to get/set information from our global state needs the line below
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Grid from "@material-ui/core/Grid"
import {makeStyles, mergeClasses} from "@material-ui/styles"

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

class AuthorContainer extends React.Component{

    render(){
        let arrayOfComponents = this.props.authors.map(author => {
            return (<li className="Authorcard" key={author.id}>
                <Link to={`/authors/${author.id}`}> {author.first_name} {author.last_name} <br></br> <img src={author.img} alt={author.first_name}></img> </Link>
            </li>
        )
        })
        

        return(
            <div className="Author-box">
                <h2>Published Author</h2>
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
        authors: gState.authorsInfo.authors
    }
}

export default connect(mapStateToProps)(AuthorContainer)