import { Navigate } from "react-router-dom";

const onSubmit = () => {}

const MemberLoginPage = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div className="flex-grow max-w-md p-4">
          <h1 className="font-bold text-lg">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            &nbsp;
            <span>로그인</span>
          </h1>
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">아이디</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="아이디"
                className="input input-bordered"
                maxlength="50"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">비밀번호</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                className="input input-bordered"
                maxlength="50"
              />
            </div>

            <div className="mt-3 grid grid-flow-col auto-cols-fr gap-2 px-1">
              <button
                type="button"
                onClick={() => Navigate(-1)}
                className="btn btn-secondary btn-outline"
              >
                뒤로가기
              </button>
              <input className="btn btn-primary" type="submit" value="로그인" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default MemberLoginPage;