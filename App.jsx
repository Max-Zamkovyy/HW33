import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Posts">Posts</NavLink>
      </nav>
      <h1>Main page</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="/Posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
