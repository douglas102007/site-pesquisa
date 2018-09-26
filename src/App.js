import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles/App.css"
import Layout from "./screens/Layout"
import {createStore} from "redux"
import {Provider} from "react-redux"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Routes from "./Routes"




const initialState = {
  userLoggedIn: false
};

function reducer(state = initialState, action){

  switch(action.type){
    case "LOG_USER_IN":
      return {userLoggedIn: true}
    default:
      return state;
  }
};

const store = createStore(reducer);


export default class App extends React.Component{
  render(){
    return(
        <Provider store={store}>
          <Router>
              <Layout>
                  <div style={{minWidth: 400}}>
                    <Routes/>
                  </div>
              </Layout>
          </Router>
        </Provider>
    );
  }
}


        