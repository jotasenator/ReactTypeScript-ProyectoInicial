import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-styles.css";

const ShopingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
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
          {Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white"
              style={{
                width: "100px",
              }}
              value={product.count}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px black",
                }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{ display: "flex", justifyContent: "center" }}
              />
            </ProductCard>
          ))}

          {/* <ProductCard
            product={product1}
            className="bg-dark text-white"
            style={{
              width: "100px",
            }}
            //onChange={() => onProductCountChange()}
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px black",
              }}
            />
            <ProductButtons className="custom-buttons" />
          </ProductCard> */}
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
      {/* <div>
        <code>{JSON.stringify(shoppingCart, null, 5)}</code>
      </div> */}
    </div>
  );
};

export default ShopingPage;
