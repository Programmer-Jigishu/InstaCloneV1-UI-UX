import { Routes,Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePageLayout from "./layouts/homePageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <HomePageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </HomePageLayout>
  );
}

export default App;
