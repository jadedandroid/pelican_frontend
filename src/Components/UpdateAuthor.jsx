import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'

class UpdateAuthor extends React.Component{
    

    state = {
        show: true,
        bio: this.props.foundAuthor.bio}

    showUpdate = (evt) => {
        this.setState({
            show: !this.state.show
        })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        let {bio} = this.state.bio
        fetch(`http://localhost:3000/authors/${this.props.foundAuthor.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bio,
                id: this.props.foundAuthor.id
            })
        })
        .then(res => res.json())
        .then(updatedAuthor => {
            console.log(updatedAuthor)
            this.props.updateAuthor(updatedAuthor)
        })
    }

   render(){
       console.log(this.state)


    let {bio} = this.state.bio
    return(
        <>

            <Button variant="warning" onClick={this.showUpdate}> Edit bio form 🛠 </Button> 


            <div>
                {this.state.show ?
                 null 
                 : 
             <form onSubmit={this.handleSubmit}>
             <h2>Edit {this.props.foundAuthor.name}!</h2>
             <input type="text" id="bio"
                    label="bio"
                    name="bio"
                    value={bio}
                    onChange={this.handleChange}
                    />
                <input type="submit" value="update Pelican Author"/>
                </form>

                }
                </div>

            </>
        )
    }
}
let mapStateToProps = (globalState) => {
    return {
        author: globalState.authors
    }
}

// Action Creator
let updateAuthor = (updatedAuthor) => {
    return {
        type: "UPDATE_AUTHOR",
        payload: updatedAuthor
    }
}

// sending information
let mapDispatchToProps = {
    updateAuthor: updateAuthor
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateAuthor)





