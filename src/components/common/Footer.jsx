import { useForm } from "react-hook-form";
import { Link } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Footer() {
  // sweetalert結帳成功提示
  const showSwalSuccess = (text, message) => {
    withReactContent(Swal).fire({
      title: text,
      text: message,
      icon: "success",
    });
  };

  // sweetalert錯誤提示
  const showSwalError = (text, error) => {
    withReactContent(Swal).fire({
      title: text,
      text: error,
      icon: "error",
    });
  };

  // 表單驗證
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  // 訂閱電子報
  // emailData目前尚未用到
  const subscribeEmail = handleSubmit(
    (data) => {
      const { ...user } = data;
      // eslint-disable-next-line no-unused-vars
      const emailData = {
        data: {
          user,
        },
      };
      showSwalSuccess(
        "已成功訂閱電子報!",
        "感謝您的訂閱，敬請期待海神的最新消息及活動!"
      );
      reset();
    },
    (error) => {
      if (error.email) {
        showSwalError("Email 格式錯誤", errors?.email?.message);
      }
    }
  );

  return (
    <>
      <div className="bg-light py-4">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center w-100">
            <p className="mb-0 fw-bold col-12 col-md-6 mb-2 mb-md-0 text-center text-md-start">
              歡迎訂閱海神的電子報!
            </p>
            <div className="col-12 col-md-6">
              <form
                action=""
                onSubmit={subscribeEmail}
                className="d-flex mt-3 mt-md-0 w-100"
              >
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="輸入Email以取得最新活動與消息!"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email為必填",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Email格式錯誤",
                    },
                  })}
                />
                <button className="btn btn-dark rounded-0 ms-2" type="submit">
                  訂閱
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-stretch justify-content-center text-white">
            <div className="col-12 col-md-4 border mb-4 mb-md-0">
              <h3>聯絡我們</h3>
              <p className="text-break">Email：pohlymagz@gmail.com</p>
              <p>服務時間：請參考海神 Facebook</p>
              <p>地址：台南市友愛街146巷5號</p>
            </div>

            <div className="col-12 col-md-4 border ps-md-4 mb-4 mb-md-0">
              <h3>購買指南</h3>
              <Link
                to="/service"
                className="text-white text-decoration-none d-block mb-3"
              >
                常見問題
              </Link>
            </div>

            <div className="d-flex flex-column col-12 col-md-4 border">
              <div className="d-flex justify-content-center mb-3">
                <ul className="d-flex list-unstyled mb-0 h4">
                  <li>
                    <a href="https://www.facebook.com/ahummingbee" className="text-white mx-3" target="_blank">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fprometheus_by_the_sea%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR0v9aFIhDLBWaEyB04WX0zYGSc5Up9eMN8RFERSfmW5KNSi2lgA_8sUupA_aem_88yXu5y03D_ddCVpyokY8w&h=AT1MZAT56W9dUnf7OxFQdOqKtP3b5r9DXCyJtBBa1OdwPVVK9xdDAghQpvpZ2fFRMsudjfFiBm4slOo7c9jOFHh-IxfPyf05KBRa9068D9I01cH628qq1UWkhVBgwol3iOttfvY" className="text-white mx-3" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white ms-3">
                      <i className="fab fa-line"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center mt-auto">
                <p className="border">© 僅個人練習使用，不做任何商業用途</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
