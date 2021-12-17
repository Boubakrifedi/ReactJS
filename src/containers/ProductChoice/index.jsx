import Product from "../../components/Product";
import { ProductData } from "../../utils/data";
import "./index.css";
const ProductChoice = () => {
  return (
      <section id="productchoice">
    {ProductData.map((item) => (
        <Product {...item} />
      ))}
      </section>
        );
};

export default ProductChoice;
