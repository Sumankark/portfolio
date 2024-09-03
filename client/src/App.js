import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Resume />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
