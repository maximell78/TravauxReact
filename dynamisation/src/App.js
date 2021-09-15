import './App.css';
import Login from "./component/Login";
import Car from "./component/hook";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const toys = ["toutou", "jeux de societe", "auto", "poupee", "livre"];

  var [first, second] = toys;

  //Comment afficher les deux premiers éléments avec un assignation ?

  console.log(first + " 1");
  console.log(second  + " 1");
  console.log("---------------------");

  var [tfirst,,,five] = toys;

  //Comment affecter le 2ème et 5ème à des variables avec le saut d’élément ?

  console.log(tfirst  + " 2");
  console.log(five  + " 2");
  console.log("---------------------");

  var [afirst, asecond, ...rest] = toys;

  //Comment récupérer les deux premiers éléments et le reste du tableau avec l’opérateur rest ?

  console.log(afirst  + " 3");
  console.log(asecond  + " 3");
  console.log(rest  + " 3");
  console.log("---------------------");

  return (
    <div className="App">
      <h1 className="pb-5">Test</h1>
      <Login/>
      <Car/>
    </div>
  );
}

export default App;
