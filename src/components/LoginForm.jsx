import { useState } from "react";
import { Link } from "react-router-dom";

function LoginForm() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevLoginInfo) => ({
      ...prevLoginInfo,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form className="from_input w-[400px]">
        <div className="mb-7 text-center text-[50px] font-bold">
          <span>로그인</span>
        </div>
        <div className="mb-4">
          <input
            id="email"
            name="email"
            value={loginInfo.email}
            onChange={handleInputChange}
            placeholder="이메일 입력"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleInputChange}
            placeholder="비밀번호 입력"
            type="password"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded"
        >
          로그인
        </button>
        <Link to="/SignUp">
          <button className="w-full py-2 mt-2 bg-green-500 text-white rounded">
            회원가입
          </button>
        </Link>
      </form>
    </div>
  );
}

export default LoginForm;
