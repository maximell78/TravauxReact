import './App.css';
import "./bootstrap.css";
import Quiz from "./component/views/Quiz"

function App() {
  return (
    <div>
      <header>
        <h1 className="text-center">Le petit Quiz</h1>
      </header>
      <div>
        <Quiz />
      </div>
    </div>
  );
}

export default App;
