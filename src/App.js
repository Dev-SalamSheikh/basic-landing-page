import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Banner/Hero";
import Service from "./components/Services/Service";
import Booking from "./components/Booking/Booking";
import Travel from "./components/Travel/Travel";
import Rating from "./components/Rating/Rating";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Service />
      <Booking />
      <Travel />
      <Rating />
      <Footer />
    </div>
  );
}

export default App;
