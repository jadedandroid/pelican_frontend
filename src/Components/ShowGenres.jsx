import React from 'react'
import {connect} from 'react-redux'
// import AddgenreForm from './AddgenreForm'

function ShowGenre(props){
    let {foundgenre} = props
    return(
        <div>
            <h2> {foundgenre.name}</h2>

        </div>
    )
}


let mapStateToProps = (gState, ownProps) => {
    return {}

}


export default connect(mapStateToProps)(ShowGenre)