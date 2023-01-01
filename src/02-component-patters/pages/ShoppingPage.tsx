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
          minCount: 0,
        }}
      >
        {({ reset }) => (
          <>
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px black",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}>Reset</button>
          </>
        )}
      </ProductCard>
    </div>
  );
};

export default ShopingPage;
