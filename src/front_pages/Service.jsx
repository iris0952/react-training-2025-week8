import { Link } from "react-router";

function Service() {
  // 常見問題內容
  const questionCardContent = [
    {
      title: "關於付款方式",
      content:
        "海神目前付款方式皆為銀行轉帳，請至 海神Facebook 詢問夏生付款事宜。",
    },
    {
      title: "訂購後，如果想取消或改變訂單，該如何處理?",
      content:
        "如果您需要取消或更改訂單，請在一週前通知夏生，我將盡力協助您處理。",
    },
    {
      title: "退款政策",
      content:
        "海神目前自取為到店付款，宅配為銀行轉帳，若您是使用宅配，請聯絡夏生，會為您進行退款。",
    },
  ];

  // 常見問題右側欄位
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
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {questionCardContent.map((cardContent) => (
              <QuestionCard
                title={cardContent.title}
                content={cardContent.content}
                key={cardContent.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
