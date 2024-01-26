import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TestimonialSlider from "./Components/TestinomialSlider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className=" d-flex justify-content-center align-items-center text-dark fw-bold p-2">
          <p className="m-0">Maqsood React Task 1 (Tesinomial Slider)</p>
        </Container>
      </header>
      <div className="main">
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default App;
