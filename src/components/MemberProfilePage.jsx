// 유저 프로필 페이지
// 전역상태에 저장된 유저정보를 불러와 프로필에 맞는 정보 기입
const MemberProfilePage = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex-grow max-w-md p-4">
          <h1 className="font-bold text-lg">
            <i className="fa-solid fa-user"></i>
            &nbsp;
            <span>사용자 프로필</span>
          </h1>
          <table className="table-1">
            <tbody>
              <tr>
                <th>
                  <span className="badge">닉네임</span>
                </th>
                <td></td>
              </tr>
              <tr>
                <th>
                  <span className="badge">이메일</span>
                </th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MemberProfilePage;
