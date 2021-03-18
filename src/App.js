
import './App.css';

function App() {

  const handleForm = (e) => {
    // returns string 
    // format = 2021-03-17
    console.log(typeof e.target[0].value)
    e.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={(event) => handleForm(event)}>
        <input type="date" name="" id=""/>
        <input type="submit" value="Enter"/>
      </form>
    </div>
  );
}

export default App;
