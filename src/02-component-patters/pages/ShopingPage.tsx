import coffeMug from "../../../public/coffee-mug.png";
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "title from product",
  img: coffeMug,
};

const ShopingPage = () => {
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
        <ProductCard product={product} style={{ background: "#70D1F8" }}>
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

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-white" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShopingPage;
