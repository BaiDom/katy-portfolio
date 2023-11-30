import "../Css/Intro.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
//  import "swiper/css";
//  import "swiper/css/autoplay";

const Intro = () => {
  return (
    <section className="intro-section" id="katy-intro">
      <div className="page-container">
        <div className="intro-cont">
          <div className="katy-title">Katy Alex</div>
          <div className="katy-products">
            {" "}
            DJ | Producer | Writer | Singer | Model{" "}
          </div>
          <div className="katy-bio-sub">
            -{" "}
            <span style={{ color: "#c8102e" }}>
              Proud Scouser and Devoted Liverpool Fan #AllezAllezAllez
            </span>{" "}
            -
          </div>
          {/* <div className="intro-swiper">
            <Swiper
              modules={Autoplay}
              spaceBetween={100}
              slidesPerView={2}
              autoplay={true}
            >
              <SwiperSlide>
                "Katy Alex is an integral player in the new wave of artists
                coming out of the north west" - Earmilk{" "}
              </SwiperSlide>
              <SwiperSlide>
                "Having grown up in the thriving Liverpool music scene, Katy
                Alex is an artist for the city to be proud of." - Notion
              </SwiperSlide>
              <SwiperSlide>"Katy is fit" - Dom </SwiperSlide>
              <SwiperSlide>
                "Katy is stinky, but so are we" - Leo & Ralf
              </SwiperSlide>
            </Swiper>
          </div> */}
          <div className="katy-bio">
            <div className="intro-releases">
              Latest releases include collaborations with Roger Sanchez, Sammy
              Virji, and Laidback Luke.
            </div>
            <br></br>

            <div className="intro-labels">
              Working with labels such as Toolroom, D4D4nce, and Mixmash.
            </div>
            <br></br>
            <div className="intro-support">
              Supported by: <br></br>
              BBC Radio 1, Capital FM, Kiss FM, George FM and more.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
