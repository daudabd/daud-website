import './App.css';
import screenshot from './images/daud.jpg';

function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>About Me</h2>
      <p>Hello! My name is Daud. I love coding.</p>
      <b><p>Welcome to my first React app</p></b>
      <ul>
        <li>Coding</li>
        <li>Basketball</li>
        <li>Film & TV</li>
        <li>Hiking</li>
        <li>Film Photography</li>
      </ul>
      <h2>My Skills</h2>
      <ol>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ol>
      <h3>My Favorite Websites</h3>
      <a href="https://javascript.info/">Visit Example Website</a>

      <div className="App">
        <h1>
          <img
            src={screenshot}
            alt="daud"
            className="image"
          />
        </h1>
      </div>
    </div>
  );
}

export default App;
