import axios from "axios";
import { useCallback, useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ScreenLoading from "../components/ScreenLoading";
import { LoadingContext } from "../LoadingContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { updateCartData } from "../redux/cartSlice";
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function ProductDetail() {
  const params = useParams();
  const { id } = params;
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [qtySelect, setQtySelect] = useState(1);
  const { isScreenLoading, setIsScreenLoading } = useContext(LoadingContext);

  useEffect(() => {
    (async () => {
      setIsScreenLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/api/${apiPath}/product/${id}`);
        setProduct(res.data.product);
      } catch (error) {
        showSwalError("取得產品失敗", error.response?.data?.message);
      } finally {
        setIsScreenLoading(false);
      }
    })();
  }, [id, setIsScreenLoading]);

  const dispatch = useDispatch();

  // 取得購物車內容
  const gettingCartList = useCallback(() => {
    const getCartList = async () => {
      setIsScreenLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/api/${apiPath}/cart`);
        dispatch(updateCartData(res.data.data));
      } catch (error) {
        showSwalError("取得購物車失敗", error.response?.data?.message);
      } finally {
        setIsScreenLoading(false);
      }
    };
    getCartList();
  }, [dispatch, setIsScreenLoading]);

  useEffect(() => {
    gettingCartList();
  }, [gettingCartList]);

  // sweetalert成功提示
  const showSwal = (text) => {
    withReactContent(Swal).fire({
      title: text,
      icon: "success",
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
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

  // 加入購物車
  const addToCart = async (product, qty = 1) => {
    setIsLoading(true);
    const productData = {
      data: {
        product_id: product.id,
        qty: Number(qty),
      },
    };
    try {
      await axios.post(`${baseUrl}/api/${apiPath}/cart`, productData);
      showSwal("已加入購物車");
      gettingCartList();
    } catch (error) {
      showSwalError("加入購物車失敗", error.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="container">
        {isScreenLoading ? (
          <ScreenLoading />
        ) : (
          <div className="row align-items-top">
            <div className="col-md-7">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={product.imageUrl}
                      className="d-block w-100 object-fit-cover"
                      alt={product.title}
                      height="500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-white px-0 mb-0 py-3">
                  <li className="breadcrumb-item">
                    <Link className="text-muted" to="/">
                      首頁
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link className="text-muted" to="/products">
                      所有甜點
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    甜點特色
                  </li>
                </ol>
              </nav>
              <span className="badge bg-primary mb-3">{product.category}</span>
              <h2 className="fw-bold mb-1">{product.title}</h2>
              <ul>
                <li>{product.content}</li>
                <li>{product.description}</li>
              </ul>
              <p className="h4 fw-bold text-end">
                NT$
                {(product?.price * qtySelect)?.toLocaleString()}
              </p>
              <div className="input-group my-3 bg-light rounded">
                <select
                  value={qtySelect}
                  onChange={(e) => setQtySelect(e.target.value)}
                  id="qtySelect"
                  className="form-select"
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <option key={index} value={index + 1}>
                      共 {index + 1} 個
                    </option>
                  ))}
                </select>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  onClick={() => addToCart(product, qtySelect)}
                  disabled={isLoading}
                  className="text-nowrap btn btn-dark w-100 py-2"
                >
                  加入購物車
                </button>
              </div>
              <div className="mb-2">
                <h5 className="mt-3 h4 fw-bold fs-5">注意事項:</h5>
                <ul className="mt-3">
                  <li>請確認您的購買數量是否正確。</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <h3 className="fw-bold">相關圖片</h3>
        {product.imagesUrl?.map((image) => (
          <div className="swiper-slide" key={image}>
            <div className="card border-0 mb-4 position-relative position-relative">
              <img
                className="card-img-top w-100 rounded-0 object-fit-cover"
                src={image}
                alt={image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
