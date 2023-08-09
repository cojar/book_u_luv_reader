import React from "react";
import { Link } from "react-router-dom";

function ReaderBookList() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ul className="grid grid-cols-1 gap-4 place-items-center">
        <li className="grid grid-cols-1 gap-4 place-items-center">
          <nav>
            <div>
              <Link to="/ReaderBook">
                <img
                  src="https://i.postimg.cc/9MnXmgL2/image.jpg"
                  alt="책"
                  className="w-[200px] h-full"
                />
              </Link>
            </div>
          </nav>
          <div>
            <Link to="/ReaderBook" className="text-center block">
              책제목
            </Link>
          </div>
          <div>
            <span className="text-center block">책내용</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ReaderBookList;