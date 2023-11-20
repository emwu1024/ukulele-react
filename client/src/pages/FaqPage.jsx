import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Accordion from "../components/Accordion/Accordion";
import { accordionContent } from "../utils/content";
import "../styles.css";

const FaqPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="faq-container">
        <h1 className="page-title">FAQ Page</h1>
        <p className="page-caption">
          Hopefully this page will answer most of your Ukulele related
          questions!
        </p>
        <div className="accordion">
          {accordionContent.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default FaqPage;
