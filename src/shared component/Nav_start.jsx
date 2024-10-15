import { Link } from "react-router-dom";

const Nav_start = () => {
  return (
    <div>
      <div className=" ">
        <Link to={"/"}>
          <img
            className="w-12"
            src="https://pbs.twimg.com/profile_images/1170191976/codeloom-twitter-logo_400x400.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav_start;
