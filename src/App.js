import React from 'react'
import Button from '@material-ui/core/Button'
import {Switch, Route} from 'react-router-dom'
import AuthorContainer from './Components/AuthorContainer'
// import LoginForm from './Components/LoginForm'
import ShowAuthor from './Components/ShowAuthor'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import AddAuthorForm from "./Components/AddAuthorForm"
import ShowGenre from "./Components/ShowGenres"
import GenreContainer from "./Components/GenreContainer"
import AddPublicationForm from "./PubComponents/AddPublicationForm"
import UpdateAuthor from "./Components/UpdateAuthor"
import PublicationContainer from "./PubComponents/PublicationContainer"
import ShowPub from "./PubComponents/PublicationContainer"
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme"
import './App.css';
import {connect} from 'react-redux'
import Home from './Components/Home'
import AddPubFromAuthor from "./Components/AddPubFromAuthor"


class App extends React.Component{

  componentDidMount(){
    fetch("http://localhost:3000/authors")
      .then(res => res.json())
      .then((authorsArray) => {
       this.props.setAuthors(authorsArray)
        
      })   

      fetch("http://localhost:3000/publications")
      .then(res => res.json())
       .then((publicationsArray) => {
         this.props.setPubs(publicationsArray)
        //  console.log(publicationsArray)
           
      })   

      fetch("http://localhost:3000/genres")
      .then(res => res.json())
      .then((allGenres) => {
        this.props.setGenres(allGenres)
        // console.log(allGenres)
      })   
 
    }

    displayAuthor = (routerProps) => {
      
      let id = routerProps.match.params.id
      let num_id = parseInt(id)
      let foundAuthor = this.props.allAuthors.find(author => author.id === num_id)
      // .find(author => author.id === num_id)
      // console.log(foundAuthor)
      // .allAuthors
  
      if(foundAuthor){
        return <ShowAuthor {...routerProps} foundAuthor={foundAuthor}/>
      } else {
        return <p>404 Page</p>
      }
    }
    updateAuthor = (routerProps) => {
      
      let id = routerProps.match.params.id
      let num_id = parseInt(id)
      let foundAuthor = this.props.allAuthors.find(author => author.id === num_id)
      console.log(foundAuthor)
  
      if(foundAuthor){
        return <UpdateAuthor {...routerProps} foundAuthor={foundAuthor}/>
      } else {
        return <p>404 Page</p>
      }
    }

    addPubFromAuthor = (routerProps) => {
      console.log(routerProps)
      let id = routerProps.match.params.id
      let num_id = parseInt(id)
      let foundAuthor = this.props.allAuthors.find(author => author.id === num_id)
      console.log(foundAuthor)
  
      if(foundAuthor){
        return <AddPubFromAuthor {...routerProps} foundAuthor={foundAuthor}/>
      } else {
        return <p>404 Page</p>
      }
    }

    displayGenre = (routerProps) => {
      
      let id = routerProps.match.params.id
      let num_id = parseInt(id)
      let foundGenre = this.props.allGenres.find(genre => genre.id === num_id)
      // .find(genre => genre.id === num_id)
      // console.log(foundgenre)
      // .allgenres
  
      if(foundGenre){
        return <ShowGenre {...routerProps} foundGenre={foundGenre}/>
      } else {
        return <p>404 Page</p>
      }
    }


    displayPub = (routerProps) => {
      let id = routerProps.match.params.id
      let num_id = parseInt(id)
      let foundPub = this.props.allPubs.find(pub => pub.id === num_id)
      // .find(author => author.id === num_id)
      console.log(foundPub)
      // .allAuthors
  
      if(foundPub){
        return <ShowPub {...routerProps} foundPub={foundPub}/>
      } else {
        return <p>404 Page</p>
      }
    }



   
      theGenres = (routerProps) => {
        let id = routerProps.match.params.id
        let num_id = parseInt(id)
        let theGenre = this.props.allGenres.find(genre => genre.id === num_id)
    
        if(theGenre){
          return <ShowGenre {...routerProps} theGenre={theGenre}/>
        } else {
          return <p>404 Page</p>
        }
      }
      

   
    render(){
      return(
        <ThemeProvider theme={theme} >
          <Header/>
          <h1>Welcome to Pelican's Publication website</h1>
          <Switch>

          <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/genres" exact>
              <GenreContainer/>
            </Route>

            <Route path="/new_pub" exact>
              <AddPublicationForm/>
            </Route>

            <Route path="/publications" exact>
          <PublicationContainer/>
            </Route>

            <Route path="/authors" exact>
              <AuthorContainer/>
            </Route>

            <Route path="/authors/new" exact>
              <AddAuthorForm/>
            </Route>
            <Route path="/genres/:id" render={this.theGenres}>
            </Route>

          <Route path="/authors/:id" render={this.displayAuthor} />  

            <Route path="/authors/:id"  render={this.updateAuthor} />

            <Route path="/authors/:id" render={this.addPubFromAuthor} />  
            <Route path="/publications/:id" render={this.displayPub} />
            
  
          </Switch>
          <Footer/>

        </ThemeProvider>
      )
    }

  }

  let setGenres = (array) => {
    return {
      type: "SET_GENRES_PLEASE",
      payload: array
    }
  }

    let setAuthors = (array) => {
      return {
        type: "SET_AUTHORS_PLEASE",
        payload: array
      }
    }
    let setPubs = (array) => {
      return {
        type: "SET_PUBS",
        payload: array
      }
    }
    let mapDispatchToProps = {
      setAuthors: setAuthors,
      setGenres: setGenres,
      setPubs: setPubs
      
    };

    let mapStateToProps = (gState) => {
     console.log(gState.authorsInfo.authors) 
     return {
        
        allAuthors: gState.authorsInfo.authors,
        allGenres: gState.genreInfo.genres,
        allPubs: gState.publicationInfo.pubs
        
      }
    }
  
  
      export default connect(mapStateToProps, mapDispatchToProps)(App);