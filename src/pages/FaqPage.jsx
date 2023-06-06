import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Accordion from "../components/Accordion/Accordion";
import { accordionContent } from "../utils/content";
import "../styles.css";

const FaqPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="accordion">
        {accordionContent.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default FaqPage;
