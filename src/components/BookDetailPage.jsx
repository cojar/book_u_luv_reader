import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fakeBookContent } from "../data/data";
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
    return <div className="flex justify-center items-center">책을 찾을 수 없습니다.</div>;
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth >= 800);
  const [contentPerPage, setContentPerPage] = useState(isMobile ? 1500 : 500);
  const [titleFontSize, setTitleFontSize] = useState(isMobile ? "50px" : "30px");

  const totalPages = Math.ceil(selectedBook.content.length / contentPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedIndex) => {
    setCurrentPage(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 800);
      setContentPerPage(isMobile ? 1500 : 500);
      setTitleFontSize(isMobile ? "50px" : "30px");
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col h-screen justify-center">
      <div className={`mb-6 text-center font-semibold title`} style={{ fontSize: titleFontSize }}>
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
              <div className="mb-8 max-w-[700px]  overflow-hidden whitespace-pre-wrap mx-auto content">
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