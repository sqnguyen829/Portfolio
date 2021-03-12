// import React from "react";
// import ReactDOM from "react-dom";
// import { Container, Header, List } from "semantic-ui-react";

// import pkg from 'semantic-ui-react/package.json'
// import Example from "./example";

// const App = ({ children }) => (
//   <Container style={{ margin: 20 }}>
//     <Example />
//     <Header as="h3">This example is powered by Semantic UI React {pkg.version} 😊</Header>
//     <List bulleted>
//       <List.Item
//         as="a"
//         content="💌 Official documentation"
//         href="https://react.semantic-ui.com/"
//         target="_blank"
//       />
//       <List.Item
//         as="a"
//         content="💡 StackOverflow"
//         href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
//         target="_blank"
//       />
//     </List>

//     {children}
//   </Container>
// );

import bg from './portfolioBG.jpg';
import logo from './logo.png';
// import bg from './bookBG.jpg';
import './App.css';
import Nav from './containers/Nav'

const bgStyle = {
  width: '85%'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
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
