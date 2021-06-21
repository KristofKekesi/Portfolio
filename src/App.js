import './App.css';

import background from "./bg.jpg";

import Navbar from "./components/navbar/navbar.js";
import Dock from "./components/dock/dock.js";

function App() {
  return (
    <div>
      <Navbar />
      <div style={{width: "100%", height: "calc(100vh - 75px)", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
        <center>
        <div style={{paddingTop: "calc(33vh - 75px)", display: "flex", justifyContent: "center"}}>
          <div>
          <h1 className="white">Kristóf Kékesi</h1>
          <span style={{flexBasis: "100%", height: "0"}} />
          <h2 className="white">Mobile Developer</h2>
        </div>
        </div>
        </center>
      </div>
      <Dock />
    </div>
  );
}

export default App;