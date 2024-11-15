//import icons
import { ShoppingBasket } from "@mui/icons-material";

//import styles files
import "../Styles/AnimatedBtn.css";

//other imports
import { useNavigate } from "react-router-dom";

const AnimatedBtn = () => {
  const navigate = useNavigate();

  return (
    <div className="animated-btn">
      <button onClick={() => navigate("/product-list")}>
        Shop Now | <ShoppingBasket />
      </button>
    </div>
  );
};

export default AnimatedBtn;
