import Clients from "./components/Clients/Clients";
import ContentOne from "./components/Contents/ContentOne";
import ContentTwo from "./components/Contents/ContentTwo";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./style/Variables.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ContentOne />
      <ContentTwo />
      <Features />
      <Clients />
    </div>
  );
}

export default App;
