import coffeMug from "../../../public/coffee-mug.png";
import coffeMugMeme from "../../../public/coffee-mug2.png";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { Product } from "../interfaces/interfaces";

import "../styles/custom-styles.css";
import { useState } from "react";

const product1 = {
  id: "1",
  title: "title from product",
  img: coffeMug,
};

const product2 = {
  id: "2",
  title: "Coffee Mug Meme",
  img: coffeMugMeme,
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
  count: number;
}

const ShopingPage = () => {
  const [shoppingCar, setShoppingCar] = useState<{
    [key: string]: ProductInCart;
  }>({});

  return (
    <div>
      <h1>Shoping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px black",
              }}
            />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}

        <div className="shopping-cart">
          <ProductCard
            product={product2}
            className="bg-dark text-white"
            style={{
              width: "100px",
            }}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px black",
              }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>

          <ProductCard
            product={product1}
            className="bg-dark text-white"
            style={{
              width: "100px",
            }}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px black",
              }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        </div>

        {/* <ProductCard product={product1} style={{ background: "#70D1F8" }}>
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px black",
            }}
          />
          <ProductTitle
            title="title from props "
            style={{
              fontWeight: "bold",
            }}
          />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>

        <ProductCard product={product1} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product2} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard> */}

        {/* <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard> */}
      </div>
    </div>
  );
};

export default ShopingPage;
