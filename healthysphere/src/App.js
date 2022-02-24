import ArticleComponent from "./components/ArticleComponent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProblemTreatments from "./components/ProblemTreatments";
import Testimonials from "./components/Testimonials";
import WhyHealthySphere from "./components/WhyHealthySphere";

function App() {
  return (
    <>
      <Navbar />
      <ProblemTreatments />
      <WhyHealthySphere />
      <ArticleComponent />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
