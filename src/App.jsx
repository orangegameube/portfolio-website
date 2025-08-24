import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home.jsx";
import { Errorpage } from "./pages/errorpage.jsx";

function App() {

  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path="*" element={<Errorpage />}/>
    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App
