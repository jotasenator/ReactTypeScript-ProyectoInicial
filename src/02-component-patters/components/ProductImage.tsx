import { useContext } from "react";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
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

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Coffe Mug"
    />
  );
};
