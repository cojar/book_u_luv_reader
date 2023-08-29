import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BookListPage = () => {

  const [loding, setloading] = useState(true)
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    setloading(true)
    fetch(`${import.meta.env.VITE_API_URL}/books`)
      .then(reponse => reponse.json())
      .then(data => {
        console.log(data)
        setBookList(data.data.books)
        setloading(false)
        }
      )
      .catch((err) => console.log("err", err))
  }, [])

  const [fontSize, setFontSize] = useState("4rem");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setFontSize("2rem");
      } else {
        setFontSize("4rem");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const booksPerPage = 6;
  const booksPerRow = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const currentBooks = bookList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(bookList.length / booksPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if ( loding ) {
    return <h1>로딩 중...</h1>
  }

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
        <div className="flex flex-wrap justify-center mt-4">
          {bookList.map((book) => (
            <div key={book.id} className="w-full sm:w-1/3 p-2">
              <div className="text-center">
                <Link to={`/books/${book.id}`}>
                  <img
                    className="mx-auto w-32 h-auto"
                    src={book.coverImg}
                    alt="책커버"
                  />
                </Link>
                <span className="block text-base font-semibold my-1">
                  {book.title}
                </span>
                <span className="block text-base font-semibold my-1">
                  {book.author}
                </span>
                <span className="block text-base font-semibold my-1">
                  {book.purchaseDate}
                </span>
                <hr className="mt-4 w-full border-gray-300" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`mx-1 px-3 py-1 rounded ${
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
