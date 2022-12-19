import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string | undefined;

  if (img) {
    imgToShow = img;
  }
  if (product.img) {
    imgToShow = product.img;
  }
  if (!img && !product.img) {
    imgToShow = noImage;
  }

  return <img className={styles.productImg} src={imgToShow} alt="Coffe Mug" />;
};
