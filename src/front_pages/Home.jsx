import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
const baseUrl = import.meta.env.VITE_BASE_URL;
const apiPath = import.meta.env.VITE_API_PATH;

function Home() {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/${apiPath}/products`);
        setProducts(res.data.products);
      } catch (error) {
        showSwalError("取得產品失敗", error.response?.data?.message);
      }
    };

    getProducts();
    new Swiper(swiperRef.current, {
      modules: [Autoplay, Pagination],
      loop: false,
      speed: 1500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        767: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  // 輪播ref
  const swiperRef = useRef(null);

  // 產品狀態
  const [products, setProducts] = useState([]);

  // sweetalert錯誤提示
  const showSwalError = (text, error) => {
    withReactContent(Swal).fire({
      title: text,
      text: error,
      icon: "error",
    });
  };

  const kyusyuFeature = [
    {
      id: "-OG9YNNDBJBoLwfPnthA",
      title: "柑橘核果布朗尼",
      description:
        "巧克力會隨著時間慢慢擴張到蛋糕體的每一吋。不管是麵糊的柳橙皮醬、表面的糖漬溪底遙柳丁以及金棗，都是細細處理熬煮的。也因此會有不同於其他的醇厚滋味。刻意將厚厚一個布朗尼分為四種口味，每次切四分之一，份量剛好，也能擁有四種享受。",
      imageUrl:
        "https://hackmd.io/_uploads/BJYb9KoIyx.jpg",
      alt: "柑橘核果布朗尼",
    },
    {
      id: "-OG9YIYJ5x67iJ9JdLXQ",
      title: "蒙布朗塔",
      description:
        "傳統蒙布朗會用蛋白霜餅與栗子餡組合，不過出於個人的喜好，我把蛋白霜餅拿掉，改動為巧克力脆餅，另外以打發後略帶空氣感的瑪斯卡彭奶油餡，搭配以鮮奶調和的清爽栗子泥，底餅是巧克力塔搭配栗子杏仁奶油餡，栗子刻意不拌到非常均勻，入口便能感受到栗子的香氣跳動。",
      imageUrl:
        "https://hackmd.io/_uploads/BkIhYKsL1e.jpg",
      alt: "蒙布朗塔",
    },
    {
      id: "-OG9YM4oSQxSRInnPm4S",
      title: "唐津蜜柑乳酪塔",
      description:
        "白巧克力玫瑰慕斯球做為引味，水蜜桃以波本威士忌酒糖液煮至微微軟化即止，增添酒香之外，保留果香及口感，底層是馬斯卡朋乳酪慕斯搭配紅肉李荔枝凍。",
      imageUrl:
        "https://hackmd.io/_uploads/HJYkqts81x.jpg",
      alt: "ramen",
    },
  ];

  const slides = [
    {
      id: 1,
      imageUrl:
        "https://zastio.com/iris/sea/%E6%8A%B9%E8%8C%B6%E5%A1%94.jpg",
      title: "抹茶塔「望」",
      description:
        "海神的招牌甜點",
    },
    {
      id: 2,
      imageUrl:
        "https://zastio.com/iris/sea/%E5%8D%97%E7%93%9C%E4%B9%B3%E9%85%AA%E8%9B%8B%E7%B3%95.jpg",
      title: "南瓜乳酪蛋糕",
      description:
        "南瓜與乳酪融合的好滋味",
    },
    {
      id: 3,
      imageUrl:
        "https://zastio.com/iris/sea/%E8%8E%8A%E5%9C%92%E5%B7%A7%E5%85%8B%E5%8A%9B%E5%B8%83%E6%9C%97%E5%B0%BC.jpg",
      title: "莊園巧克力布朗尼",
      description: "使用法國巧克力大廠米歇爾科茲<瑪拉露蜜>莊園的巧克力製作",
    },
  ];

  return (
    <div className="container-fluid">
      <div
        className="position-absolute w-100"
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundImage:
            "url(https://zastio.com/iris/sea/%E6%AB%83%E6%AA%AF.jpg)",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          opacity: 0.6,
          zIndex: -1,
        }}
      ></div>
      <div
        className="container d-flex flex-column"
        style={{ minHeight: "calc(100vh - 56px)" }}
      >
        <div className="row justify-content-center my-auto">
          <div className="col-md-6 text-center">
            <h2>海神甜點劇場</h2>
            <p className="text-muted mb-0">
              夏生邀請您一起來品嚐
              <br />
              順應節氣
              <br />
              使用當季最新鮮的食材製作出的獨一無二的甜點
            </p>
            <Link to="/products" className="btn btn-dark rounded-0 mt-6">
              逛逛海神
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          {kyusyuFeature.map((feature) => (
            <div className="col-md-4 mt-md-4" key={feature.id}>
              <Link
                to={`/products/${feature.id}`}
                className="text-decoration-none"
              >
                <div className="card border-0 mb-4">
                  <img
                    src={feature.imageUrl}
                    className="card-img-top rounded-0 object-fit-cover"
                    alt={feature.alt}
                    height="250"
                  />
                  <div className="card-body text-center">
                    <h4>{feature.title}</h4>
                    <div className="d-flex justify-content-between">
                      <p className="card-text text-muted mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid px-0">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="d-flex justify-content-center align-items-center text-white text-center"
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "60vh", // 固定高度，依需求調整
                    width: "100%",
                  }}
                >
                  <div className="bg-dark bg-opacity-50 p-3 rounded">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="container my-7">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://zastio.com/iris/sea/%E5%8F%B8%E5%BA%B701.jpg"
              alt="car_gps"
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mt-4">海神特色</h4>
            <p className="text-muted">
            順應節氣來製作甜點，考慮食材、視覺的呈現。
              <br />
              甜點， 傳遞的是一份生活態度，雖然不可能要求自己的作品百分之百被客人喜愛，蘇夏生：「討喜這件事情是很難的，也是沒有追求的。 」每每介紹完今日販售甜點後，他總不忘加上一句「請自備保鮮盒」，不向客人說教，將觀念付諸執行，直接表現於生活日常。
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse justify-content-between mt-4">
          <div className="col-md-6">
            <img
              src="https://zastio.com/iris/sea/%E9%BA%B5%E5%8C%85.jpg"
              alt="natural view"
              className="img-fluid object-fit-cover"
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mt-4">魄麗雜誌</h4>
            <p className="text-muted">
            魄麗第二刷修訂版目前仍可以訂購，十二本含整套封套，每套2800元含運。內容包括「蜂鳴」時期作品、海濱四年獨居時期創作，約３0款作品。每一款作品都是從原料介紹、處理方式及合適的工具、搭配食材的邏輯、我的搭配及理念介紹，每一個細節解析，包括在作法之外，另外會有一篇搭配的專欄解釋每個步驟為什麼要這麼製作。另外也會實際以多篇幅的攝影作品，實際以身教讓大家理解何謂夏生想表現的視覺及生活美學。
            </p>
          </div>
        </div>
      </div>
      <div className="swiper mt-4 mb-5" ref={swiperRef}>
        <div className="swiper-wrapper mb-3">
          {products.map((product) => (
            <div className="swiper-slide" key={product.id}>
              <Link
                to={`/products/${product.id}`}
                className="d-block text-decoration-none"
              >
                <div className="card border-0 mb-4 position-relative">
                  <img
                    src={product.imageUrl}
                    className="card-img-top rounded-0 object-fit-cover"
                    alt={product.title}
                    height="300"
                  />
                  <div className="card-body p-0">
                    <h4 className="mb-0 mt-3">{product.title}</h4>
                    <p className="card-text mb-0">
                      NT$
                      {product?.price?.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
}

export default Home;
