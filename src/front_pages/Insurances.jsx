import { useEffect } from "react";
import { Link, useLocation } from "react-router";

function Insurances() {
  // 判斷當前路徑是否為insurance
  const location = useLocation();
  useEffect(() => {
    const collapseOne = document.getElementById("collapseOne");
    const collapseTwo = document.getElementById("collapseTwo");
    if (location.pathname === "/insurance") {
      collapseOne?.classList.remove("show");
      collapseTwo?.classList.add("show");
    }
  }, [location]);

  // 側邊欄位內容(常見問題)
  const normalQuestion = [
    "關於付款方式",
    "訂購後，如果想取消或改變訂單，該如何處理?",
    "退款政策",
  ];

  

  // 常見問題側邊欄位
  const QuestionList = ({ title, link }) => {
    return (
      <li>
        <Link to={link} className="py-2 d-block text-muted">
          {title}
        </Link>
      </li>
    );
  };

  // 常見問題右側欄位(回答)
  const QuestionCard = ({ title, content }) => {
    return (
      <div className="card border border-light mb-3">
        <div className="card-header fw-bold">{title}</div>
        <div className="card-body">
          <p className="card-text">{content}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid">
        <div className="container mt-md-5 mt-3 mb-7">
          <div className="row">
            <div className="col-md-3">
              <div
                className="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
                id="accordionExample"
              >
                <div className="card border-0">
                  <div
                    className="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                  >
                    <div className="d-flex justify-content-between align-items-center pe-1">
                      <h4 className="mb-0">常見問題</h4>
                    </div>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body py-0">
                      <ul className="list-unstyled">
                        {normalQuestion.map((title) => (
                          <QuestionList
                            title={title}
                            key={title}
                            link={"/service"}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card border-0">
                  <div
                    className="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
                    id="headingTwo"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insurances;
