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
  const { id } = useParams();

  const selectedBook = fakeBookContent.find(
    (book) => book.id === parseInt(id, 10)
  );

  if (!selectedBook) {
    return <div>책을 찾을 수 없습니다.</div>;
  }

  const contentPerPage = 1500;
  const totalPages = Math.ceil(selectedBook.content.length / contentPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedIndex) => {
    setCurrentPage(selectedIndex);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col h-screen justify-center">
        <div className="mb-[10px] text-[50px] text-center">
          <h2>{selectedBook.title}</h2>
        </div>
        <div className="text-end mb-[80px]">
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
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="arrow-button left-arrow"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
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
