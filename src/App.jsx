import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SongsPage from "./pages/SongsPage";
import SignUpPage from "./pages/SignUpPage";
import FaqPage from "./pages/FaqPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      {/* <HomePage></HomePage> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;