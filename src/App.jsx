import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Translator from "./components/Translator";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Translator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
