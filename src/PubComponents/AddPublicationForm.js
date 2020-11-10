import React from 'react'
import {connect} from 'react-redux'



class AddPublicationForm extends React.Component{
    
   state = {
        title: "", 
        description: "", 
        rating: 0, 
        date_pub: "mm/yyyy", 
        img1: "", 
        genre: 1,
        author: 1,
    }

    
    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        let {title, description, rating, date_pub, img1, genre, author} = this.state
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
                genre,
                author
            })
        })
        .then(res => res.json())
        .then((newPub) => {
            console.log(newPub)
            this.props.addPub(newPub)
        })



    }

    
    render() {
        // const authors = this.props.authors.authors
        // const genres = this.props.genres.genres
        let genreList = () => {
            if (this.props.genres){
                return this.props.genres.genres.map(genre => {
                    return <option key={genre.id} value={genre.id}>{genre.name}</option>
                })
            }
        }
        let authorList = () => {
            if (this.props.authors){
                return this.props.authors.authors.map(author => {
                    return <option key={author.id} value={author.id}>{author.first_name}{author.last_name}</option>
                })
            }
        }

        return(
            <form onSubmit={this.handleSubmit}>
                <h1 className="pubForm"> Publication Registration Form</h1>
                <label htmlFor="title">Publication Title:</label>
                <input 
                    type="text" id="title" 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.handleChange}
                />
                
                <label htmlFor="description">Publication description:</label>
                <textarea 
                    type="text" id="description" 
                    name="description" 
                    value={this.state.description} 
                    onChange={this.handleChange}
                />
                
                <label htmlFor="rating">rating:</label>
                <input 
                    type="integer" id="rating" 
                    name="rating" 
                    value={this.state.rating} 
                    onChange={this.handleChange}
                />
                
                <label htmlFor="date_pub">date published:</label>
                <input 
                    type="text" id="date_pub" 
                    name="date_pub" 
                    value={this.state.date_pub} 
                    onChange={this.handleChange}
                />
                
                <label htmlFor="img1">Add cover Image:</label>
                <input 
                    type="text" id="img1" 
                    name="img1" 
                    value={this.state.img1} 
                    onChange={this.handleChange}
                />
                
                {/* <label htmlFor="img2">Add back cover image:</label>
                <input 
                    type="text" id="img2" 
                    name="img2" 
                    value={this.state.img2} 
                    onChange={this.handleChange}
                /> */}
                
                {/* <label htmlFor="book">is pubication a book?:</label>
                <input 
                    type="checkbox" id="book" 
                    name="book" 
                    value={this.state.book} 
                    onChange={this.handleChange}
                /> */}


                <label htmlFor="genre">Select genre</label>
                
                <select value={this.state.genre}
                name="genre" id='genre'
                onChange={this.handleChange}>
                {genreList()}
                </select>

                <label htmlFor="author">Select author</label>
                
                <select value={this.state.author}
                name="author" id= "author" 
                onChange={this.handleChange}>
                {authorList()}
                </select>

                <input type="submit" value="Create a new Pelican publication"/>

                </form>
                
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

export default connect(mapStateToProps, mdtp)(AddPublicationForm)


