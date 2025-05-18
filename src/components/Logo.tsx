import { Link } from "react-router-dom";
import H1 from "./typography/H1";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <H1>
        <Link to="/">abun</Link>
      </H1>
    </div>
  );
};

export default Logo;
