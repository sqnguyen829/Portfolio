import bg from './portfolioBG.jpg';
// import bg from './bookBG.jpg';
import './App.css';

const bgStyle = {
  width: '80%',
  marginTop: '100px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
