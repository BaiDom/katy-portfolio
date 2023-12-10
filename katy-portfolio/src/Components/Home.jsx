// import Katy1 from "../Assets/Katy-brand.svg";
// import Katy2 from "../Assets/Katy-live.svg";
// import "../Css/Home.css";
import BrandSec from "../Components/Brand.jsx";
import Live from "./Live";
import Music from "./Music.jsx";
import Intro from "./Intro.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <main>
      <div className="page-container">
        <div className="flex">
          <Intro />
          <BrandSec />
          <Music />
          <Live />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default Home;
