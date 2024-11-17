import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "./../components/Loader";
import { useProductsDetails } from "../context/ProductContext";

import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();

  const productsDetails = useProductsDetails(+id);

  if (!productsDetails) return <Loader />;

  return (
    <div className={styles.container}>
      <img src={productsDetails.image} alt={productsDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productsDetails.title}</h3>
        <p className={styles.description}>{productsDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productsDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productsDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
