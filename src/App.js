import { useSelector } from "react-redux";

function App() {

  const { number, userName } = useSelector((state) => state.counter)
  return (
    <div className="container">
      <h1>hello</h1>
      <h1>{number}</h1>
      <h1>{userName}</h1>
    </div>
  );
}

export default App;
