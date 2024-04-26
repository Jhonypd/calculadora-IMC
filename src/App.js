/** @format */

import "./App.css";
import Form from "./components/Form/Form";
import Login from "./components/Login/LoginControl";
// import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Form title />
      <Login name={"Jhony"} />
    </div>
  );
}

export default App;
