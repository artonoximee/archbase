import './App.css';

import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="page" className="container-fluid bg-dark text-light">
      <div className="container">
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <Navbar />
            <h1>Hello world</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
