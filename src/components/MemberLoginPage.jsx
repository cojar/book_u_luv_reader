import { useNavigate } from "react-router-dom";
import { loginFakeUserData } from "../fakeData/fakeData";
import { useState } from "react";

const MemberLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const enteredEmail = form.email.value.trim();
    const enteredPassword = form.password.value.trim();

    if (enteredEmail.length === 0) {
      alert("이메일을 입력해주세요.");
      form.email.focus();
      return;
    }

    if (enteredPassword.length === 0) {
      alert("비밀번호를 입력해주세요.");
      form.password.focus();
      return;
    }

    if (
      enteredEmail === loginFakeUserData.data.member.email &&
      enteredPassword === "123123"
    ) {
      console.log("로그인 성공:", loginFakeUserData.data.member);
      navigate("/");
    } else {
      console.error("로그인 실패");
      alert("로그인 실패");
    }
  };

  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="flex-grow max-w-md p-4">
          <h1 className="font-bold text-lg">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            &nbsp;
            <span>로그인</span>
          </h1>
          <form onSubmit={onSubmit} className="my-[10px]">
            <div className="form-control mb-[10px]">
              <input
                type="email"
                name="email"
                placeholder="이메일"
                className="input input-bordered"
                maxLength="50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                className="input input-bordered"
                maxLength="50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mt-3 grid grid-flow-col auto-cols-fr gap-2 px-1">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn btn-secondary btn-outline"
              >
                뒤로가기
              </button>
              <input
                className="btn btn-primary btn-outline"
                type="submit"
                value="로그인"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MemberLoginPage;