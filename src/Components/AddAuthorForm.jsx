import { connect } from "react-redux";
import React from "react";
import { withRouter } from "react-router-dom";

class AddAuthorForm extends React.Component{
  
    state = {
        first_name: "",
        last_name: "",
        bio: "", 
        email: "", 
        residence: "", 
        rating: 0, 
        img: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    } 
  handleSubmit = (e) => {
    e.preventDefault();
    let {first_name, last_name, bio, residence, rating, img} = this.state
    fetch("http://localhost:3000/authors", {
      method: "POST",
      headers: {
        "Content-type": "Application/json",
      },
      body: JSON.stringify({
        first_name, 
        last_name, 
        bio,
        residence, 
        rating, 
        img
      }),
    })
      .then((r) => r.json())
      .then((resp) => {
        this.props.addAuthor(resp);
      });
  };
render (){
  return (
    <>
    <h2>New Author Form</h2>
    <form onSubmit={this.handleSubmit}>
        <label htmlFor="first_name">first name:</label>
        <input type="text" id="first_name" name="first_name" 
            onChange={this.handleChange} 
            value={this.state.first_name}
            />
        <label htmlFor="last_name">Last name:</label>
        <input type="text" id="last_name" 
            name="last_name" 
            onChange={this.handleChange}
            value={this.state.last_name}
        />
        <label htmlFor="bio">author Biography:</label>
        <input type="text" id="bio" 
            name="bio" 
            onChange={this.handleChange}
            value={this.state.bio}
        /><br/>
        {/* <label htmlFor="email">Email contact:</label>
        <input type="text" id="email" 
            name="email" 
            onChange={this.handleChange}
            value={this.state.email}
        /> */}
        <label htmlFor="residence">Residence of Author:</label>
        <input type="text" id="residence" 
            name="residence" 
            onChange={this.handleChange}
            value={this.state.residence}
        />
        <label htmlFor="rating">author rating:</label>
        <input type="number" id="rating" 
            name="rating" 
            onChange={this.handleChange}
            value={this.state.rating}
        /><br/>
        <label htmlFor="img">Image of Author:</label>
        <input type="text" id="img" 
            name="img" 
            onChange={this.handleChange}
            value={this.state.img}
        />
        <input type="submit" value="Create a new Pelican Author"/>
    </form>
</>
  );
}
}

let addAuthor = (newAuthor) => {
  return {
    type: "ADD_AUTHOR",
    payload: newAuthor,
  };
};

// let mapStateToProps = (gState) => {
//   return {};
// };


let mapDispatch = {
  addAuthor: addAuthor,
};

export default connect(null, mapDispatch)(withRouter(AddAuthorForm));



// {/* <label htmlFor="category">Category</label>
// <select
// id="category"
//   value={category}
//   onChange={(e) => setCategory(e.target.value)}
//   required
// >
//   <option value="" disabled>
//     Select Category
//   </option>
//   {categoryArray.map((cat) => (
//     <option key={cat.id} value={cat.id}>
//       {cat.title}
//     </option>
//   ))}
// </select> */}