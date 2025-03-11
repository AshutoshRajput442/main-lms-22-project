import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./pages/Header";
import Home from "./pages/HomePage/Home";
import Emplogin from "./pages/EmployeeLogin/Emplogin";
import Second from "./pages/EmployeeLogin/Second";
import Admlogin from "./pages/AdminLogin/Admlogin";
import First from "./pages/AdminLogin/First";
import Third from "./pages/Third";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Home" element={<Layout><Home /></Layout>} />
        <Route path="/Emplogin" element={<Layout><Emplogin /></Layout>} />
        <Route path="/courses" element={<Second />} />

        
        <Route path="/pdf/:id" element={<Layout><Third /></Layout>} />

        <Route path="/Admlogin" element={<Layout><Admlogin /></Layout>} />
        <Route path="/First" element={<Layout><First /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
