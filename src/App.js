import bg from './portfolioBG.jpg';
import logo from './logo.png';
// import bg from './bookBG.jpg';
import './App.css';

const bgStyle = {
  width: '85%'
}

function App() {
  return (
    <div className="App">
        <header className="App-header">
        <img src={logo} style={{width:'3%', marginTop:'0px'}}/>
        <p>
          Steven Nguyen
        </p>
        <img src={bg} style={bgStyle}/>
        <p>
        Full Stack Software Engineer
        </p>
        <a
          className="App-link"
          href="https://github.com/sqnguyen829"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
