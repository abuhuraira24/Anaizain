import { FaAngleLeft, FaAngleRight, FaCameraRetro } from "react-icons/fa";
import styles from "../../assets/styles/categories/categories.module.scss";

const Categories = () => {
  return (
    <div className={`dispaly-none ${styles.catego}`}>
      <div className={styles.catTitle}>
        <h5>Categories</h5>{" "}
        <span>
          <FaAngleLeft />
          <FaAngleRight />
        </span>
      </div>
      <div className={styles.listStyle}>
        <ul>
          <li>
            <span>
              <FaCameraRetro />
              Consumer Electronic
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              Apparel
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              Vehical & Accessories
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              Sports & Entertaintment
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              Machinery
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              Home & Garden
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              Beauty & Personal Care
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
          <li>
            <span>
              <FaCameraRetro />
              All Categories
            </span>
            <span>
              <FaAngleRight />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
