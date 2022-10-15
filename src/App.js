import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import BookPreview from './component/BookPreview'
import Register from "./component/Register";

function App() {
  return (
    <Routes>
      <Route 
      path="/"
      element={<BookPreview/> }
      />
    <Route
      path="/login"
      element={<Login/>}
    />

    <Route
      path="/register"
      element = {<Register/>}
    />

    </Routes>
    
    
  )
}

export default App;
