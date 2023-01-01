import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const ShopingPage = () => {
  const product = products[0];

  return (
    <div>
      <h1>Shoping Page</h1>
      <hr />

      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark text-white"
        initialValues={{
          count: 0,
          maxCount: 10,
          minCount: 2,
        }}
      >
        {({
          reset,
          isMaxCountReached,
          minCount,
          maxCount,
          increaseBy,
          count,
        }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShopingPage;
