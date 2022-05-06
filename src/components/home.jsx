import "./home.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import store from "../context/storeContext";

const Home = () => {
  const user = useContext(store).user;

  return (
    <div className="home-page">
      <h6>Welcome back {user.email}</h6>

      <div className="top-banner">
        <div className="top-banner-text">
          <h1>Welcome to the Homepage</h1>
          <h2>Fresh Baked Goods!</h2>
        </div>
        {/* <img src="/images/wrap2.jpg" alt="fresh food"></img> */}
      </div>

      <div>
        <Link className="btn btn-lg btn-primary" to="/catalog">
          Check out our catalog!
        </Link>
      </div>
    </div>
  );
};

export default Home;
