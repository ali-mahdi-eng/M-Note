import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home";
import Note from "./pages/Note";
import Folders from "./pages/Folders";
import Settings from "./pages/Settings";
import Trash from "./pages/Trash";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/note" element={<Note />} />
        <Route path="/folders" element={<Folders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/trash" element={<Trash />} />

        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

