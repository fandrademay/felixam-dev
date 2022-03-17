import './fonts/stylesheet.css'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import home from './pages/home';
import blog from './pages/blog';
import cv from './pages/cv';
import projects from './pages/projects';
import ContactForm from './contact/contact_index';


function App() {
  return (
    <div style={{display: 'inline-flex'}}>
      <Router>
      <NavBar />
        <Routes>
          <Route path='/' exact component={home} />
          <Route path='/blog' component={blog} />
          <Route path='/cv' component={cv} />
          <Route path='/projects' component={projects} />
          <Route path='./contact/contact_index' component={ContactForm} />
        </Routes>
      </Router>
      <div className="App">
        <header className="App-header">
        <ContactForm />
        <a className="App-Link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"></a>
        </header>
      </div>
  </div>
  );
}

export default App;

