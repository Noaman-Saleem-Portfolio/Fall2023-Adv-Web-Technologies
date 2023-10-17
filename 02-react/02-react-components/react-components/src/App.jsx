import BootstrapNavbar from "./components/BootstrapNavbar/BootstrapNavbar";
import CardComponent from "./components/Card/Card";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <BootstrapNavbar/>
      <CardComponent/>
      {/* <Navbar/> */}
      {/* <h1>I am App Component</h1> */}
      <Footer/>
    </div>
  );
}

export default App;
