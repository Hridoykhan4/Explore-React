import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {

  function handleClick(){
    alert('button Clicked');
  }

  const handleClick2 = () => {
    alert('Button 2 Clicked')
  } 

  const addTofive = (num) => alert(num + 5)


  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>


    <Users></Users>


      <Team></Team>


      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('Click Me')}}>Third</button>
      <button onClick={() => {addTofive(3)}}>Four</button>
      <button onClick={function handleClick(){
        alert('You Clicked Me')
      }}>Click Me 5</button>
    </>
  );
}

export default App;
