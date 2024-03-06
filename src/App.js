import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import "./App.css";
import AddRoom from "./components/rooms/AddRoom";
import ExistingRooms from "./components/rooms/ExistingRooms.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AddRoom />
        <ExistingRooms />
      </BrowserRouter>
    </div>
  );
}

export default App;
