import { useState } from "react";
import { Link } from "react-router-dom";

function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    certificationNumber: "",
    password: "",
    passwordConfirm: "",
    phone: "",
    address: "",
    subAddress: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //생년월일
  function renderYearOptions() {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100; // 최근 100년 전부터 선택 가능하도록 설정
    const endYear = currentYear - 18; // 18세 이상만 선택 가능하도록 설정

    const options = [];
    for (let year = endYear; year >= startYear; year--) {
      options.push(
        <option key={year} value={year}>
          {year}년
        </option>
      );
    }

    return options;
  }

  function renderMonthOptions() {
    const options = [];
    for (let month = 1; month <= 12; month++) {
      options.push(
        <option key={month} value={month}>
          {month}월
        </option>
      );
    }

    return options;
  }

  function renderDayOptions() {
    const options = [];
    for (let day = 1; day <= 31; day++) {
      options.push(
        <option key={day} value={day}>
          {day}일
        </option>
      );
    }

    return options;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <section className="form flex flex-col md:flex-row md:space-x-4">
        <form className="from_input w-[400px]">
          <div className="mb-4 text-center text-[50px] font-bold">
            <span>회원가입</span>
          </div>
          <div className="sign_up_form mb-4">
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="이름 입력"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="sign_up_form flex mb-4">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="이메일 입력"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="ml-2 w-[200px] py-2 px-4 bg-blue-500 text-white rounded"
            >
              인증번호 전송
            </button>
          </div>
          <div className="sign_up_form flex mb-4">
            <input
              id="certificationNumber"
              name="certificationNumber"
              value={formData.certificationNumber}
              onChange={handleInputChange}
              placeholder="인증번호 입력"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="ml-2 w-[200px] py-2 px-4 bg-green-500 text-white rounded"
            >
              인증번호 확인
            </button>
          </div>
          <div className="sign_up_form mb-4">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호 입력"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="sign_up_form mb-4">
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
              placeholder="비밀번호 재입력"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="sign_up_form mb-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="전화번호 입력"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="sign_up_form flex mb-4">
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="주소입력"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="ml-2 w-[200px] py-2 px-4 bg-blue-500 text-white rounded"
            >
              우편번호 찾기
            </button>
          </div>
          <div className="sign_up_form mb-4">
            <input
              id="subAddress"
              name="subAddress"
              value={formData.subAddress}
              onChange={handleInputChange}
              placeholder="상세주소입력"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="sign_up_form mb-4">
            <div className="flex space-x-2">
              <select
                id="birthYear"
                name="birthYear"
                value={formData.birthYear}
                onChange={handleInputChange}
                className="p-2 w-full border rounded"
              >
                <option value="" disabled>
                  년
                </option>
                {renderYearOptions()}
              </select>
              <select
                id="birthMonth"
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleInputChange}
                className="p-2 w-full border rounded"
              >
                <option value="" disabled>
                  월
                </option>
                {renderMonthOptions()}
              </select>
              <select
                id="birthDay"
                name="birthDay"
                value={formData.birthDay}
                onChange={handleInputChange}
                className="p-2 w-full border rounded"
              >
                <option value="" disabled>
                  일
                </option>
                {renderDayOptions()}
              </select>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded"
            >
              가입완료
            </button>
          </div>

          <div className="flex justify-center">
            <Link
              to="/Login"
              className="w-full text-center py-2 mt-2 bg-gray-500 text-white rounded"
            >
              취소
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}

export default SignUpForm;
