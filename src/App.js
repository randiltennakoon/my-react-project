import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
// import Post from './Post';

// It's better to write like this.
// function-based component
const App = () => {
  return (
    <div className="App">
      <h2>This is a new part</h2>
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
