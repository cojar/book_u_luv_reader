import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fakeBookContent } from "../fakeData/fakeData";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookDetailPage = () => {
  const { id } = useParams(); //URL 파라미터에서 id 추출 /book/id(여기 값)

  const selectedBook = fakeBookContent.find(
    (book) => book.id === parseInt(id, 10)
  ); //가짜 데이터에 있는 id로 데이터 찾는 함수

  if (!selectedBook) {
    return <div>책을 찾을 수 없습니다.</div>; // 없을시 못찾음
  }

  const contentPerPage = 1500; //페이지 글자수 1500자
  const totalPages = Math.ceil(selectedBook.content.length / contentPerPage); //전체 페이지수 계산 (데이터 글자 길이 / 1500해서 전체 페이지 구현)

  const [currentPage, setCurrentPage] = useState(0); // 현재페이지 번호 상태관리

  const handlePageChange = (selectedIndex) => {
    setCurrentPage(selectedIndex);
  }; //페이지 변경 함수

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col h-screen justify-center">
        <div className="mb-6 text-[50px] text-center font-semibold">
          {selectedBook.title}
        </div>
        <div className="text-end mb-6">
          <p>
            현재 페이지: {currentPage + 1}/{totalPages}
          </p>
        </div>
        <Carousel
          showStatus={false}
          transitionTime={500}
          showIndicators={false}
          selectedItem={currentPage}
          onChange={handlePageChange}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="arrow-button left-arrow"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="arrow-button right-arrow"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            )
          }
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className="flex justify-center items-center h-full"
            >
              <div className="mb-8 max-w-[700px] text-[20px] overflow-hidden whitespace-pre-wrap mx-auto">
                {selectedBook.content.substring(
                  index * contentPerPage,
                  (index + 1) * contentPerPage
                )}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
export default BookDetailPage;
