import coffeMug from "../../../public/coffee-mug.png";
import coffeMugMeme from "../../../public/coffee-mug2.png";
import { Product } from "../interfaces/interfaces";

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

export const products: Product[] = [product1, product2];