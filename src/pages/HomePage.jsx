import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import Hero from "../components/Hero/Hero";
import "../styles.css";

const HomePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Card></Card>
      <Footer></Footer>
    </>
  );
};

export default HomePage;
