import { NavLink } from "react-router-dom";
import HeaderMenu1Item from "./HeaderMenu1Item";

function Header() {
    return ( 
        <>
        <header className="top-bar fixed top-0 left-0 w-full z-50 h-10 shadow text-gray-500 bg-white">
          <div className="container mx-auto h-full flex">
            <NavLink to="/home/main" className="flex items-center px-4">
              <span className="text-[#1E9EFE]">BOOK</span>
              <span className="ml-[2px] hidden lg:block">U_LUV</span>
            </NavLink>
            <div className="flex-grow"></div>
            <nav className="menu-1">
              <ul className="flex h-full">
                <HeaderMenu1Item to="/home/main">
                  <i className="fas fa-home"></i>
                  <span className="hidden sm:block">&nbsp;</span>
                  <span className="hidden sm:block">홈</span>
                </HeaderMenu1Item>
                <HeaderMenu1Item to="/home/about">
                  <i className="fas fa-info"></i>
                  <span className="hidden sm:block">&nbsp;</span>
                  <span className="hidden sm:block">앱 정보</span>
                </HeaderMenu1Item>
                <>
                  <HeaderMenu1Item to="/member/profile">
                    <i className="fa-solid fa-user"></i>
                    <span className="hidden sm:block">&nbsp;</span>
                    <span className="hidden sm:block">
                    </span>
                  </HeaderMenu1Item>
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
                  <HeaderMenu1Item to="/member/logout">
                    <i className="fas fa-sign-out-alt"></i>
                    <span className="hidden sm:block">&nbsp;</span>
                    <span className="hidden sm:block">로그아웃</span>
                  </HeaderMenu1Item>
                </>
                <>
                  <HeaderMenu1Item to="/member/login">
                    <i className="fas fa-sign-in-alt"></i>
                    <span className="hidden sm:block">&nbsp;</span>
                    <span className="hidden sm:block">로그인</span>
                  </HeaderMenu1Item>
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