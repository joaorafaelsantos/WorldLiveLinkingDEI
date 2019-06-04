import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavbarContainer from "./containers/NavbarContainer";
import SignInContainer from "./containers/SignInContainer";
import MapContainer from "./containers/MapContainer";
import ChatContainer from "./containers/ChatContainer";
import SignUpContainer from "./containers/SignUpContainer";
import ProfileContainer from "./containers/ProfileContainer";
import "./App.css";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ProfileValidationContainer from "./containers/ProfileValidationContainer";
import ChatContainer2 from "./containers/ChatContainer2";

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#8c2d19',
        dark: '#000'
     },
     secondary: {
       main: '#2196F3',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <NavbarContainer />
        <div className="App-router">
          <Route exact path="/" component={SignInContainer}/>
          <Route path="/signin" component={SignInContainer}/>
          <Route path="/signup" component={SignUpContainer}/>
          <Route path="/profile" component={ProfileContainer}/>
          <Route path="/map" component={MapContainer}/>
          <Route path="/chat" component={ChatContainer}/>
          <Route path="/validatealumni" component={ProfileValidationContainer}/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
