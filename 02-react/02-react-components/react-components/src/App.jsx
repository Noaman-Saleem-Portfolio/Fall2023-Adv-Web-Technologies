import BootstrapNavbar from "./components/BootstrapNavbar/BootstrapNavbar";
import CardComponent from "./components/Card/Card";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const carName = "Black BMW";
  const description = "I Love this car. If i have to buy this one then I must leave Pakistan and go abroad to achieve this goal :)"
  return (
    <div>
      <BootstrapNavbar/>
      <CardComponent carName={carName} description={description} />
      {/* <Navbar/> */}
      {/* <h1>I am App Component</h1> */}
      <Footer/>
    </div>
  );
}

export default App;
