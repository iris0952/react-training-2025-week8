function About() {
    return (
      <div className="container-fluid">
        <div
          className="position-fixed w-100 h-100"
          style={{
            top: 0,
            left: 0,
            backgroundImage:
              "url(https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/485688967_1097409049097849_7218233140639595703_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ivGKTUELiV0Q7kNvgGoezEm&_nc_oc=AdmijPb0y6JP0nuH1EW9HDN4WtKYE5ZvrpWh-_8q_T6TfE2QyqAAAm2CYbCWUsztfBQ&_nc_zt=23&_nc_ht=scontent-tpe1-1.xx&_nc_gid=AAaz2HM_rYa-zidPGbardg&oh=00_AYHKYIgS4O9jDe4Wta2sH7UVGUd-VRC6zSVt-SWyOL_DKA&oe=67E5E7E4)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            opacity: 0.6,
            zIndex: -1,
          }}
        ></div>
        <div className="container position-relative d-flex">
          <div className="my-5">
            <h3 className="mt-3 mb-4 text-center text-md-start">關於我們</h3>
            <div className="text-center mt-3 mb-3 d-flex flex-column align-items-center">
              <h4 className="my-5">關於海神甜點劇場的過去</h4>
              <p
                className="mx-auto fs-6 mb-6 mt-4"
                style={{
                  lineHeight: "2",
                  maxWidth: "70%",
                }}
              >
                蜂鳴甜點食驗室是海神甜點劇場的前身 2014 年創立，起初是基於對甜點的熱愛，從大學時期開始自學烘焙，經過17年的持續練習與探索，最終決定開設這間食驗室。在創立初期，推出了「禪廚」計畫，這是一個為期半年的專案，每週營業兩天，每次服務四位客人。​根據節氣設計主題，製作相應的甜點，並在桌面上搭配花藝和音樂，營造出獨特的用餐體驗。​這段期間，每週更換主題，製作不同的甜點，累積了豐富的經驗。
              </p>
              <h4 className="my-4">海神甜點劇場的理念</h4>
              <p
                className="mx-auto fs-6 mb-6 mt-4"
                style={{
                  lineHeight: "2",
                  maxWidth: "70%",
                }}
              >
                隨著禪廚的結束，進入「道」計畫。這是個從追求細節的牢籠，進入隨心所欲的階段，甜點回歸食物本身的質樸，而夏生想做的是改變多數人的飲食觀念，「有很多人甜點拿回去就直接塞，我想透過甜點教別人怎麼吃甜點。」
                <br/><br/>
                以日本人吃羊羹為例：兩個人配茶分著吃，慢慢享受，悠然地度過一個下午。「我最怕客人跟我說：『你上次的甜點好好吃，我一個晚上就吃完了！』甜點又不是對身體那麼好的東西，怎麼一下子就把它吃完！」常建議客人適量，「人的飲食如果比喻成蛋糕，甜點只是上面的一顆草莓而已，下面的主體是你的日常飲食生活，所以請（客人）不要每個禮拜都來找我！」甜點也改以精緻、小巧、少量為原則，例如南瓜乳酪蛋糕，放入健康的食材，南瓜的比例拉高，也不若外面動輒百元以上的定價，「這更符合我的道德概念。」
                <br /><br/>
                夏生所指的飲食觀念，並不侷限在甜點，而是整體。譬如食材，用的是主婦聯盟合作社的雞蛋，「牠是放養的，依照雞喜歡在陰暗地方產卵的習性，在陰暗處放生蛋箱；但是市面上很多雞是關在Ａ４大小的空間，一輩子待在那裡，覺得很不安心！」直接面對喜好追求低價食材的問題核心，「工作不就是為了生活？生活裡吃當然是很大的部分，結果把錢拿去買手機、買很多東西，然後在吃的地方盡量挑便宜的吃！」
                <br/><br/>
                甜點， 傳遞的是一份生活態度，雖然不可能要求自己的作品百分之百被客人喜愛，夏生反思：「討喜這件事情是很難的，也是沒有追求的。 」每每介紹完今日販售甜點後，總不忘加上一句「請自備保鮮盒」，不向客人說教，將觀念付諸執行，直接表現於生活日常。
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;
  