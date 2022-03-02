import camera from "../../assets/images/topretedshop/camera.png";
import styles from "../../assets/styles/specialshop/specialshop.module.scss";
const Shopping = () => {
  return (
    <div className={styles.shoppinItem}>
      <div className={styles.itemIamge}>
        <img src={camera} alt="camera" />
      </div>
      <div className={styles.shoptitle}>
        <h6>fujifilm DSLR 2240</h6>
      </div>
    </div>
  );
};

export default Shopping;
