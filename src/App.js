import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Learning from "./components/learning/Learning";
import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <Menu />
      <About />
      <Courses />
      <Learning />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
