import "./App.css";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Createpost from "./pages/Createpost";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-post" element={<Createpost />}></Route>
      </Routes>
    </div>
  );
}

export default App;
