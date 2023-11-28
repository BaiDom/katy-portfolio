// import Katy1 from "../Assets/Katy-brand.svg";
// import Katy2 from "../Assets/Katy-live.svg";
// import "../Css/Home.css";
import BrandSec from "../Components/Brand.jsx";
import Live from "./Live";

const Home = () => {
  return (
    <main>
      <div className="page-container">
        <div className="flex">
          <BrandSec />
          <Live />
        </div>
      </div>
    </main>
  );
};

export default Home;
