import {
  FaLuggageCart,
  FaRegCommentAlt,
  FaShoppingCart,
  FaUserAlt,
} from "react-icons/fa";
import styles from "../../../assets/styles/ProductDetails/header/header.module.scss";

const HeaderIcon = () => {
  return (
    <div className={`dispaly-none ${styles.headerIcon}`}>
      <div className={styles.item}>
        <FaUserAlt />
        <span>Sign In</span>
      </div>
      <div className={styles.item}>
        <FaRegCommentAlt />
        <span>Message</span>
      </div>
      <div className={styles.item}>
        <FaLuggageCart />
        <span>Order</span>
      </div>
      <div className={styles.item}>
        <FaShoppingCart />
        <span>Cart</span>
      </div>
    </div>
  );
};

export default HeaderIcon;
