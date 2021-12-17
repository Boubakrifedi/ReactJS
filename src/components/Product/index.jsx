import "./index.css";
const Product = ({title, image, price, type}) => {
  return (
    <section >
      <h2>{title}</h2>
      <div class="product">
        <img src={image} alt="" />
        <p>
          <strong>{type}</strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex,
          voluptatem, soluta aliquid cum quam numquam suscipit expedita autem
          quas odio eveniet quibusdam similique id laboriosam! Earum est totam
          consequuntur!
        </p>
        <p>A partir de</p>
        <p>
          {price}   </p>
        
          <button type="button">voir ce produit</button>
        
      </div>
    </section>
  );
};

export default Product;
