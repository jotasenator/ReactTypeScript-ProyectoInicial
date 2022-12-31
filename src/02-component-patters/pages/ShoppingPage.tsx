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
          count: 4,
          maxCount: 10,
        }}
      >
        {(text) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px black",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
            {text}
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShopingPage;
