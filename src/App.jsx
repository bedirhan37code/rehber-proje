import axios from "axios";

function App() {
  axios
    .get("http:localhost:3000/contact")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return (
    <div>
      <h1>Udemig</h1>
    </div>
  );
}

export default App;
