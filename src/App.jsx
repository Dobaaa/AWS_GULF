import { Route, Routes } from "react-router";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        {/* Public Routes*/}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
