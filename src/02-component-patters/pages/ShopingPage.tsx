import ProductCard from "../components/ProductCard";
import coffeMug from "../../../public/coffee-mug.png";
import {
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components/ProductCard";

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
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="title from props " />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShopingPage;
