import ArticleComponent from "./components/ArticleComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WhyHealthySphere from "./components/WhyHealthySphere";

function App() {
  return (
    <div>
      <Navbar />
      <WhyHealthySphere />
      <ArticleComponent />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
