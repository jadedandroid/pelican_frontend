import React from 'react'
import {connect} from 'react-redux'
import {Button} from "@material-ui/core"



class AddPubFromAuthor extends React.Component{
    
   state = {
        show: true,
        author: this.props.foundAuthor,
        author_id: this.props.foundAuthor.id,
        title: "", 
        description: "", 
        rating: 0, 
        date_pub: "mm/yyyy", 
        img1: "", 
        genre_id: 1,
        
    }
    addPub = (evt) => {
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
        let {title, description, rating, date_pub, img1, genre_id, author_id} = this.state
        fetch("http://localhost:3000/publications", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            }, 
            body: JSON.stringify({
                title, 
                description,
                rating,
                date_pub,
                img1,
                genre_id,
                author_id
            })
        })
        .then(res => res.json())
        .then((newPub) => {
            console.log(newPub)
            this.props.addPub(newPub)
        })



    }

    
    render() {
        let genreList = () => {
            if (this.props.genres){
                return this.props.genres.genres.map(genre => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })
            }
        }

        return(
            
            <>
            <Button variant="contained" color="secondary" className="editButton" onClick={this.addPub}> <h3>Add Publication</h3> 🛠 </Button> 
            
            <div>
            {this.state.show ?
                null 
                : 
            <form onSubmit={this.handleSubmit}>
                <h1 className="pubForm"> Publication Registration Form</h1>

                    <label htmlFor="rating">rating:</label>
                <input 
                    type="integer" id="rating" 
                    name="rating" 
                    value={this.state.rating} 
                    onChange={this.handleChange}
                /><br/>
                <label htmlFor="title">Publication Title:</label>
                <input 
                    type="text" id="title" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleChange}
                /><br/>
             
                <label htmlFor="description">D escription:</label>
                <textarea 
                    type="text" id="description" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.handleChange}
                /><br/>
               
                
                <label htmlFor="date_pub">date published:</label>
                <input 
                    type="text" id="date_pub" 
                    name="date_pub" 
                    value={this.state.date_pub} 
                    onChange={this.handleChange}
                /><br/>
                
                <label htmlFor="img1">Add cover Image:</label>
                <input 
                    type="text" id="img1" 
                    name="img1" 
                    value={this.state.img1} 
                    onChange={this.handleChange}
                /><br/>
                
                {/* <label htmlFor="img2">Add back cover image:</label>
                <input 
                    type="text" id="img2" 
                    name="img2" 
                    value={this.state.img2} 
                    onChange={this.handleChange}
                /> */}
                

                <label htmlFor="genre_id">Select genre_id</label>
                
                <select value={this.state.genre_id}
                name="genre_id" id='genre_id'
                onChange={this.handleChange}>
                {genreList()}
                </select>

                <br/>
                <Button onClick={this.handleSubmit} variant="contained" color="#000FFF" 
                >Create a new Pelican publication </Button>

                <input type="submit" value=""/>

                </form>
    }
    </div>
           </>     
        )
      
    } 
     
    }
    


let mapStateToProps = (gState) => {
    return {
        authors: gState.authorsInfo,
        genres: gState.genreInfo

    }
}



let addPub = (singlePub) => {
    return {
        type: "ADD_PUB",
        payload: singlePub
    }
}

let mdtp = {addPub}

export default connect(mapStateToProps, mdtp)(AddPubFromAuthor)


