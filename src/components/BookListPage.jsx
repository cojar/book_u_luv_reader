// 도서 리스트 페이지
// 로그인 했는지 여부 체크 필요
// 로그인 안했다면 메인화면으로 보냄
// 데이터 로딩 처리 필요
// api 를 통해 데이터 받아와야함
const BookListPage = () => {
    //...
    return (
      <section>
        <div className="container mx-auto">
          <div className="p-4">
            <h1 className="font-bold text-lg">
              <i className="fa-solid fa-book"></i>
              &nbsp;
              <span>도서</span>
            </h1>
            <ul className="grid gap-2 mt-2">
                <li>
                //...
                </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };

  export default BookListPage;