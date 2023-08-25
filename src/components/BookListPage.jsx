import React, { useEffect, useState } from "react";
import { fakeBookData } from "../fakeData/fakeData";
import { Link } from "react-router-dom";

const BookListPage = () => {
  const [fontSize, setFontSize] = useState("6rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        //브라우저 화면 넓이가 600보자 작을때 1rem 폰트 사이즈
        setFontSize("1rem");
      } else {
        setFontSize("2rem"); // 아닐시 2rem 크기
      }
    };

    handleResize(); //handleResize 실행
    window.addEventListener("resize", handleResize); // 초기 로드 및 화면 크기 변경 시 이벤트 리스너 등록

    // 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const booksPerPage = 6;
  const booksPerRow = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = fakeBookData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(fakeBookData.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="my-10">
        <div className="w-full mx-auto text-center">
          <style>
            {`
          @font-face {
            font-family: 'KyoboHandwriting2022khn';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KyoboHandwriting2022khn.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `}
          </style>
          <span style={{ fontFamily: "KyoboHandwriting2022khn", fontSize }}>
            My books
          </span>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          {currentBooks.map((book) => (
            <div key={book.id} className={`w-full sm:w-1/${booksPerRow} p-4`}>
              <div className="text-center">
                <Link to={`/books/${book.id}`}>
                  <img
                    className="mx-auto w-48 h-65"
                    src={book.coverImg}
                    alt=""
                  />
                </Link>
                <span className="block text-lg font-semibold my-3">
                  {book.title}
                </span>
                <span className="block text-lg font-semibold my-3">
                  {book.author}
                </span>
                <span className="block text-lg font-semibold my-3">
                  {book.purchaseDate}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookListPage;
