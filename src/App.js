import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Button } from 'react-bootstrap';
// import Post from './Post';

const my_styles = {
  color : 'purple'
}

// It's better to write like this.
// function-based component
const App = () => {
  return (
    <div className="App">
      {/* <h2 style={{color: 'black'}}>This is a new part</h2> */}
      <h2 style={my_styles}>This is a new part</h2>
      <Button>
        Submit      
      </Button>
      {/* <Post /> */}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Hello world</h1>
//     </div>
//   );
// }

export default App;


// to install react-bootstrap
// $ npm i --save react-bootstrap bootstrap
