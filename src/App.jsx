import Advantages from "./components/Advantages/Advantages";
import Clients from "./components/Clients/Clients";
import ContentOne from "./components/Contents/ContentOne";
import ContentTwo from "./components/Contents/ContentTwo";
import Features from "./components/Features/Features";
import FeaturesMore from "./components/Features/FeaturesMore";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
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
      <FeaturesMore />
      <Advantages />
      <Product />
    </div>
  );
}

export default App;
