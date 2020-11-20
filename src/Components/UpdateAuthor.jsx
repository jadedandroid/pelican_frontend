import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button'

class UpdateAuthor extends React.Component{
    

    state = {
        show: true,
        author: this.props.foundAuthor,
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
        fetch(`http://localhost:3000/authors/${this.props.foundAuthor.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                bio: this.state.bio
            })
        })
        .then(res => res.json())
        .then(updatedAuthor => {
            
            this.props.updateAuthor(updatedAuthor)
            console.log(updatedAuthor)
        })
    }

   render(){
    //    this.state)


    let {bio} = this.state.bio;
    let first_name = this.state.author.first_name
    console.log(first_name)
    return(
        <>

            <Button variant="contained" color="secondary" className="editButton" onClick={this.showUpdate}> <h3>Edit {first_name}'s form</h3> 🛠 </Button> 


            <div>
                {this.state.show ?
                 null 
                 : 
             <form onSubmit={this.handleSubmit}>
             <h2>Edit {this.props.foundAuthor.name}!</h2>
             <textarea  type="text" id="bio"
                    label="bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.handleChange}
                    />
                <input  type="submit" value="update Pelican Author"/>
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





