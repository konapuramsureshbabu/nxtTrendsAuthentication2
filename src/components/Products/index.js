import Header from '../Header'
import './index.css'

const Products = () => (
  <div>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        className="products-img"
        alt="products"
      />
    </div>
  </div>
)
export default Products
