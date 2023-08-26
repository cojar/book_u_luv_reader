import { Navigate, Route, Routes } from "react-router-dom";
import BookListPage from "./components/BookListPage";
import BookDetailPage from "./components/BookDetailPage";
import MemberProfilePage from "./components/MemberProfilePage";
import MemberLoginPage from "./components/MemberLoginPage";
import MemberLogoutPage from "./components/MemberLogoutPage";
import HomeMainPage from "./components/HomeMainPage";
import Header from "./components/Header";

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/books/" element={<BookListPage />} />
          <Route path="/books/:id" element={<BookDetailPage />} />

          <Route path="/member/profile" element={<MemberProfilePage />} />
          <Route path="/member/login" element={<MemberLoginPage />} />
          <Route path="/member/logout" element={<MemberLogoutPage />} />

          <Route path="/home/main" element={<HomeMainPage />} />

          <Route path="*" element={<Navigate to="/home/main" />} />
        </Routes>
    </>
  );
}

export default App;
