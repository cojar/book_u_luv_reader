import { Navigate } from "react-router-dom";

const BookDetailPage = () => {
  
    return (
      <section>
        <div className="container mx-auto">
          <div className="p-4">
            <h1 className="font-bold text-lg">
              <i className="fa-solid fa-book"></i>
              &nbsp;
              <span>도서 : </span>
            </h1>
  
            <div className="mt-3">
              <span className="badge badge-primary"></span>
              &nbsp;
              <span>
                <span>
                  <i className="fa-solid fa-feather"></i>
                </span>
                &nbsp;
                <span></span>
              </span>
            </div>
  
            <div className="mt-5">
              <h1 className="font-bold text-lg">
                <i className="fa-solid fa-list-ol"></i> 목차
              </h1>
            </div>
  
            <div className="mt-3">
            </div>
  
            <div className="mt-5">
              <h1 className="font-bold text-lg">
                <i className="fa-regular fa-file-lines"></i> 내용
              </h1>
            </div>
  
            <div className="mt-3 toast-ui-viewer">
              <div
                className="toastui-editor-contents"
                style={{ "overflow-wrap": "break-word" }}
              >
              </div>
            </div>
  
            <div className="mt-3">
              <button
                className="btn btn-sm btn-primary btn-outline btn-block"
                onClick={() => Navigate(-1)}
              >
                뒤로가기
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default BookDetailPage;