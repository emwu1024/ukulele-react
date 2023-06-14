import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import ToDoList from "../components/ToDoList/ToDoList";
import "../styles.css";

const ProfilePage = () => {
  return (
    <>
      <NavBar></NavBar>
      <ToDoList></ToDoList>
      <Footer></Footer>
    </>
  );
};

export default ProfilePage;
