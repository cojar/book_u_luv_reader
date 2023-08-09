import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="p-4">
      <section className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src="https://i.imgur.com/lHB6WYc.png" 
            alt="로고"
            className="w-[100px] h-full"
          />
        </Link>
        <div className="mt-2 md:mt-0 flex space-x-2 md:space-x-4">
          <Link
            to="/Login"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            로그인
          </Link>
          <Link
            to="/SignUp"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            회원가입
          </Link>
        </div>
      </section>
    </header>
  );
}

export default Header;
