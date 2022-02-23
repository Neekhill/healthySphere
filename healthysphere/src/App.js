import ArticleComponent from "./components/ArticleComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhyHealthySphere from "./components/WhyHealthySphere";
import styled from "styled-components";

function App() {
  return (
    <>
      <Navbar />
      <WhyHealthySphere />
      <ArticleComponent />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
