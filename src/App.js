import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doc from "./components/Doc"
import Hire from './components/Hire';
import Features from "./components/Features";
import Infinite from "./components/Infinite";
import Enterprise from "./components/Enterprise";

function App() {
  return (
    <div className="md:container">
      <Navbar/>
      <Home/>
      <Doc/>
      <Infinite/>
      <Hire/>
      <Features/>
      <Enterprise/>
    </div>
  );
}

export default App;
