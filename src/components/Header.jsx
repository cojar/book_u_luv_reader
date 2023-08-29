import { NavLink } from "react-router-dom";
import HeaderMenu1Item from "./HeaderMenu1Item";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "../recoilAtoms";

// 로그인 여부 체크 필요
// 전역 상태관리를 이용한 유저데이터 받아오기
function Header() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <>
      <header className="top-bar fixed top-0 left-0 w-full z-50 h-10 shadow text-gray-500 bg-white">
        <div className="container mx-auto h-full flex">
          <NavLink to="/home/main" className="flex items-center px-4">
            <span className="text-[#1E9EFE]">BOOK</span>
            <span className="ml-[2px] hidden lg:block">U_LUV</span>
            <span className="ml-[2px] hidden lg:block">Reader</span>
          </NavLink>
          <div className="flex-grow"></div>
          <nav className="menu-1">
            <ul className="flex h-full">
              <>
                <HeaderMenu1Item
                  to="/books"
                  isActive={(match) => {
                    return match.path.startsWith("/books/");
                  }}
                >
                  <i className="fa-solid fa-book"></i>
                  <span className="hidden sm:block">&nbsp;</span>
                  <span className="hidden sm:block">도서</span>
                </HeaderMenu1Item>
                {isLoggedIn ? (
                  <>
                    <HeaderMenu1Item to="/member/logout">
                      <div className="flex items-center">
                        <i className="fas fa-sign-out-alt"></i>
                        <span className="ml-2 hidden sm:block">로그아웃</span>
                      </div>
                    </HeaderMenu1Item>
                    <HeaderMenu1Item to="/member/profile">
                      <div className="flex items-center">
                        <i className="fa-solid fa-user"></i>
                        <span className="ml-2 hidden sm:block">프로필</span>
                      </div>
                    </HeaderMenu1Item>
                  </>
                ) : (
                  // <HeaderMenu1Item to="/member/login">
                  //   <div className="flex items-center">
                  //     <i className="fas fa-sign-in-alt"></i>
                  //     <span className="ml-2 hidden sm:block">로그인</span>
                  //   </div>
                  // </HeaderMenu1Item>
                  <HeaderMenu1Item to="/member/logout">
                    <div className="flex items-center">
                      <i className="fas fa-sign-out-alt"></i>
                      <span className="ml-2 hidden sm:block">로그아웃</span>
                    </div>
                  </HeaderMenu1Item>
                )}
              </>
            </ul>
          </nav>
        </div>
      </header>
      <div className="h-10"></div>
    </>
  );
}

export default Header;
