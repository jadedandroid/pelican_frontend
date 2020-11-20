import React from 'react'
import {connect} from 'react-redux'
import ShowPub from "../PubComponents/ShowPub"
// import from './AddgenreForm'

function ShowGenre(props){
    console.log(props.theGenre.publications)

    let pubs = props.theGenre.publications.map(pub => {
        return <ShowPub key={pub.id} pubs={pub}/>
    })

    let genre = props.theGenre
    return(
        <div>
            <h2> {genre.name}</h2>
            <img src={genre.img} alt={genre.title}/>
             <h2> {genre.description}</h2>
             {pubs}

        </div>
    )
}


// let mapStateToProps = (gState, ownProps) => {
//     return {}

// }


export default connect(null)(ShowGenre)