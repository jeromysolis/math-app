
import './App.css';

var n1,randOper,oper,n2,answ;
n1 = Math.floor(Math.random() * 100 + 1);
n2 = Math.floor(Math.random() * 100 + 1);
randOper = Math.floor(Math.random() * 4);

if (randOper === 1) {
  oper = "+";
  answ = n1 + n2;
}else if (randOper === 2) {
  while (n1 < n2) {
    n1 = Math.floor(Math.random() * 100 + 1);
  }
  oper = "-"; 
  answ = n1 - n2;
}else if (randOper === 3) {
  oper = "x";
  answ = n1 * n2;
}else{
  while ((n2 > 10) || (n2 < 2) || (n2 > n1)) {
    n2 = Math.floor(Math.random() * 10 + 1);
  }
  oper = "/";
  answ = n1 / n2;
}


function App() {
  return (
    <div className="App">
      <h1>
        Evan's Math game
      </h1>
      <p>
        A flash card game to practice basic math skills!
      </p>
      <p>
        Created using REACT JS
      </p>
      <>
      <ul>
        <li>{n1}</li>
        <li>{oper}</li>
        <li>{n2}</li>
        <li> = </li>
        <li>{answ}</li>
      </ul>
      <form>
        <label>Solve the Problem</label><br /><input type="number" /><br /><input type="submit" />
      </form>
      </>
     
    </div>
  );
}

export default App;
