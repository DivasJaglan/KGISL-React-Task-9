import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import RightStats from "./Components/RightStats";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="main-content">
        <Sidebar />
        <div className="cards">
          <h2>Welcome Divas</h2>
          <p>
            All systems are running smoothly! You have{" "}
            <span>3 unread alerts!</span>
          </p>
          <RightStats />
        </div>
      </div>
    </div>
  );
}

export default App;
