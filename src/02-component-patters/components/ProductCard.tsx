import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement, useContext } from "react";

interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

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

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
        +
      </button>
    </div>
  );
};

const ProductCard = ({ children, product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}

        {/* <ProductImage img={product.img}/>

        <ProductTitle title={product.title}/>

        <ProductButtons increaseBy={increaseBy} counter={counter}/>         */}
      </div>
    </Provider>
  );
};

export default ProductCard;

ProductCard.Image = ProductImage;
ProductCard.Title = ProductTitle;
ProductCard.Buttons = ProductButtons;
