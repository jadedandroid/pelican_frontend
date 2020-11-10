import React from 'react';
import {Link,} from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"

const Header = () => {

  return (
    //   <AppBar> <ToolBar>
          <header className="App-header">
      <h1>Welcome to the World of books</h1>
      <img src={"http://www.pelicanpublishers.com/images/pelican-publishers-logo.png"} className="App-logo" alt="logo" />
      <Link className="nav" to="/"> Pelican A reader's Home!</Link> <br></br>
      <Link className="nav" to="/authors">Meet Pelican's Authors!</Link> <br></br>
      <Link className="nav" to="/authors/new">Add to Pelican's Authors!</Link> <br></br>
      <Link className="nav" to="/publications"> Pelican Published!</Link> 
      <Link className="nav" to="/new_pub"> Add to Pelicans Published!</Link> 
      <Link className="nav" to="/genres"> the genres</Link> 
    </header> 
    )
  
          {/* </ToolBar>
          </AppBar>
    */}
  
};

export default Header;
