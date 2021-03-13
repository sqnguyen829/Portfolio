// import bg from './portfolioBG.jpg';
import logo from './logo.png';
// import bg from './bookBG.jpg';
import bg from './bg2.jpg'
import './App.css';
import Nav from './containers/Nav'
import { Button } from 'semantic-ui-react'

const bgStyle = {
  width: '100%'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} style={{width:'3%', marginTop:'-100px'}}/>
        <Nav/>
        <p>
          Steven Nguyen
        </p>
        <p>
        Full Stack Software Engineer
        </p>
        <div class='row'>
          <a 
            href="https://github.com/sqnguyen829"
            target="_blank"
            rel="noreferrer"
          >
            <Button circular color='github' icon='github' />
          </a>
          <a 
            href="https://www.linkedin.com/in/steven-nguyen-89511115a/"
            target="_blank"
            rel="noreferrer"
          >
            <Button circular color='linkedin' icon='linkedin' />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;