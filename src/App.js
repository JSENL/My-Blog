import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route
}from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesList from './pages/ArticlesList'
import ArticlePage from './pages/ArticlePage'
import Navbar from './Navbar';

class App extends Component{
render() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div id="page-body">
      <Route path="/" component={HomePage} exact/>
      <Route path="/about" component={AboutPage} exact/>
      <Route path="/articles-list" component={ArticlesList} exact/>
      <Route path="/article/:name" component={ArticlePage} exact/>
    </div>
    </div>
    </Router>
  );
}
}
export default App;
