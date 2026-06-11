
import ProductCard from "../ProductCard/ProductCard"

const ProductList = ({ products }) => {
  return (
    <section className="product-list">
      <h2>ProductList</h2>
      <hr />
         <div className="product-grid">
            {products.map((product)=> (<ProductCard key={product.id} product={product} />))}
         </div>
    </section>
  )
}

export default ProductList