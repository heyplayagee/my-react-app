import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import logo from './logo.svg';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={Homepage} exact />   
              <Route path="/about" component={AboutPage} />   
              <Route path="/articles-list" component={ArticlesListPage} />   
              <Route path="/article/:name" component={ArticlePage} />   
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
