
import ProductCard from '../components/ProductCard';
import coffeMug from "../../../public/coffee-mug.png";

const product = {
    id:'1',
    title: 'Coffee Mug - Card',
    img:coffeMug
}

const ShopingPage = () => {
  return (
    <div>
      <h1>Shoping Page</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap'
      }}>

      <ProductCard product={product}/>
      </div>
    </div>
  )
}

export default ShopingPage
