import './App.css';
import React from 'react';
import SigninPage from './views/SigninPage/SigninPage';
import SignupPage from './views/SignupPage/SignupPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path="/signin">
              <SigninPage />
            </Route>
            <Route path="/signup">
              <SignupPage />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
