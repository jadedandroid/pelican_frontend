import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ROUTING STUFF HERE
import {BrowserRouter} from 'react-router-dom'

// REDUX STUFF HERE
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

// Below is a reducer (func. definition)
  // The return value of our reducer BECOMES our global state


///////////////////////////////////////////Author Reducer///////////////////////////////////////////////

let initialStateOfAuthorReducer = {
  authors: []
}
let authorReducer = (state = initialStateOfAuthorReducer, action) => {
  switch(action.type){
    case "SET_AUTHORS_PLEASE":
      let authorInfo = action.payload
      return {
        ...state,
        authors: authorInfo
      }
      case "ADD_AUTHOR":
      let copyOfAuthors = [...state.authors, action.payload]
      return {
        ...state,
        authors: copyOfAuthors
      }
      case "UPDATE_AUTHOR":
      let updatingAuthors = [...state.authors].map(authorObj => {
        if(authorObj.id === action.payload.id){
          return action.payload
        } else {
          return authorObj
        }
      })
      return {
        ...state,
        authors: updatingAuthors
      }

      case "DELETE_AUTHOR":
      let copyOfAuthor2 = state.authors.filter(
        (author) => author.id !== action.payload.id
      );
      return {
        ...state,
        post: copyOfAuthor2,
      };
    default:
      return state
  }
}


/////////////////////////////////////////// Publications Reduducer ///////////////////////////////////
let initialStateOfPubReducer = {
  pubs: []
}

let pubReducer = (state = initialStateOfPubReducer, action) => {
  switch(action.type){
    case "SET_PUBS":
      let publicationInfo = action.payload
      return {
        ...state,
        pubs: publicationInfo
      }
      case "ADD_PUB":
      let copyOfpubs = [...state.pubs, action.payload]
      return {
        ...state,
        pubs: copyOfpubs
      }
      default:
        return state
      
  }

}



//////////////////////////////////////////Genre Reducer///////////////////////////////////////////////
let initialStateOfGenreReducer = {
  genres: []
}
let genreReducer = (state = initialStateOfGenreReducer, action) => {
  switch(action.type){
    case "SET_GENRES_PLEASE":
      let genreInfo = action.payload
      return {
        ...state,
        genres: genreInfo
      }
      default:
        return state
    }
}


let thePojo = {
  authorsInfo: authorReducer,
  genreInfo: genreReducer,
  publicationInfo: pubReducer
}

let rootReducer = combineReducers(thePojo)


let storeObj = createStore(
  rootReducer,  
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
  <Provider store={storeObj}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

