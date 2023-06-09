import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SongsPage from "./pages/SongsPage";
import SongPage from "./pages/SongPage";
import SignupPage from "./pages/SignupPage";
import FaqPage from "./pages/FaqPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      {/* <HomePage></HomePage> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs" element={<SongsPage />} />
        <Route path="/songs/:id" element={<SongPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </>
  );
}

export default App;
